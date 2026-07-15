import { Component } from '@angular/core';
import { LogoBtn } from '../logo-btn/logo-btn';
import { NavbarItem } from '../../types/navbar-item';
import { NAV_BAR_ROUTES } from '../../app.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
	selector: 'navbar',
	imports: [CommonModule, LogoBtn, RouterLink, RouterLinkActive],
	templateUrl: './navbar.html',
	styleUrl: './navbar.css',
	standalone: true,
})
export class Navbar {
	navOptions: readonly NavbarItem[] = NAV_BAR_ROUTES;
	isMenuOpen: boolean = false;

	constructor(protected readonly themeService: ThemeService) {}

	toggleMenu(): void {
		this.isMenuOpen = !this.isMenuOpen;
	}
}
