import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ROUTES } from '../../app.routes';
import { Meta, Title } from '@angular/platform-browser';
import { CodeRepos } from '../../components/code-repos/code-repos';

@Component({
	selector: 'app-about',
	imports: [RouterLink, CodeRepos],
	templateUrl: './about.html',
	styleUrl: './about.css',
	host: { class: 'page' },
})
export class About {
	readonly SEC_PRIVACY_ROUTE = `/${ROUTES.SEC_PRIVACY}`;

	constructor(
		private titleService: Title,
		private meta: Meta,
	) {}

	ngOnInit(): void {
		this.titleService.setTitle('About - Zmey');

		this.meta.updateTag({
			name: 'description',
			content:
				"Zmey is built by one person, Ramphy Aquino Nova, in direct response to the EU's Chat Control legislation — a self-hosted, end-to-end encrypted alternative that doesn't depend on legal exemptions.",
		});

		this.meta.updateTag({
			property: 'og:title',
			content: 'About - Zmey',
		});

		this.meta.updateTag({
			property: 'og:description',
			content:
				'Built by one person in direct response to EU Chat Control legislation. Self-hosted, end-to-end encrypted, no single company or jurisdiction in control.',
		});

		this.meta.updateTag({
			property: 'og:url',
			content: 'https://zmey.chat/about',
		});
	}
}
