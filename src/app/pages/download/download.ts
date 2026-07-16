import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { ROUTES } from '../../app.routes';

@Component({
	selector: 'app-download',
	imports: [RouterLink],
	templateUrl: './download.html',
	styleUrl: './download.css',
	host: { class: 'page' },
})
export class Download {
	readonly SEC_PRIVACY_ROUTE = `/${ROUTES.SEC_PRIVACY}`;
	readonly ABOUT_ROUTE = `/${ROUTES.ABOUT}`;

	constructor(
		private titleService: Title,
		private meta: Meta,
	) {}

	ngOnInit(): void {
		this.titleService.setTitle('Download - Zmey');

		this.meta.updateTag({
			name: 'description',
			content:
				"Zmey isn't downloadable yet. Here's exactly where the build stands: what's live, what's planned, and how to follow progress.",
		});

		this.meta.updateTag({
			property: 'og:title',
			content: 'Download - Zmey',
		});

		this.meta.updateTag({
			property: 'og:description',
			content:
				'Not yet. But real. The homeserver is live, the client is in development. iOS, Android, and desktop, built together.',
		});

		this.meta.updateTag({
			property: 'og:url',
			content: 'https://zmey.chat/download',
		});
	}
}
