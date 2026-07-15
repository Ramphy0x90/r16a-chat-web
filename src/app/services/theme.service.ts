import { Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'zmey-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
	readonly theme = signal<Theme>(this.resolveInitialTheme());

	constructor() {
		this.applyTheme(this.theme());
	}

	get isDarkTheme(): boolean {
		return this.theme() === 'dark';
	}

	get isLightTheme(): boolean {
		return this.theme() === 'light';
	}

	toggle(): void {
		this.setTheme(this.theme() === 'dark' ? 'light' : 'dark');
	}

	setTheme(theme: Theme): void {
		this.theme.set(theme);
		localStorage.setItem(STORAGE_KEY, theme);
		this.applyTheme(theme);
	}

	private applyTheme(theme: Theme): void {
		document.documentElement.classList.remove('light', 'dark');
		document.documentElement.classList.add(theme);
	}

	private resolveInitialTheme(): Theme {
		const stored = localStorage.getItem(STORAGE_KEY);
		if (stored === 'light' || stored === 'dark') {
			return stored;
		}

		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}
}
