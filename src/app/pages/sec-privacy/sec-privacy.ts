import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { ROUTES } from '../../app.routes';
import { CodeRepos } from '../../components/code-repos/code-repos';

@Component({
	selector: 'app-sec-privacy',
	imports: [RouterLink, CodeRepos],
	templateUrl: './sec-privacy.html',
	styleUrl: './sec-privacy.css',
	host: { class: 'page' },
})
export class SecPrivacy {
	readonly WARRANT_CANARY_ROUTE = ROUTES.WARRANT_CANARY;
	readonly ABOUT_ROUTE = ROUTES.ABOUT;

	constructor(
		private titleService: Title,
		private meta: Meta,
	) {}

	ngOnInit(): void {
		this.titleService.setTitle('Security & Privacy - Zmey');

		this.meta.updateTag({
			name: 'description',
			content:
				"What Zmey protects, what it can't, and why. End-to-end encryption via the audited Matrix protocol, self-hosted in Switzerland, fully open source.",
		});

		this.meta.updateTag({
			property: 'og:title',
			content: 'Security & Privacy - Zmey',
		});

		this.meta.updateTag({
			property: 'og:description',
			content:
				'What we protect, what we can\'t, and why. Matrix protocol encryption, Swiss self-hosting, and public source code, explained plainly.',
		});

		this.meta.updateTag({
			property: 'og:url',
			content: 'https://zmey.chat/security-privacy',
		});
	}
}
