import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import canary from '../../../assets/canary.json';

@Component({
	selector: 'app-warrant-canary',
	imports: [DatePipe],
	templateUrl: './warrant-canary.html',
	styleUrl: './warrant-canary.css',
	host: { class: 'page' },
})
export class WarrantCanary implements OnInit {
	readonly canary = canary;
	readonly isStale: boolean;

	constructor(
		private titleService: Title,
		private meta: Meta,
	) {
		const daysSince = Math.floor(
			(Date.now() - new Date(canary.lastUpdated).getTime()) / (1000 * 60 * 60 * 24),
		);
		this.isStale = daysSince > canary.staleAfterDays;
	}

	ngOnInit(): void {
		this.titleService.setTitle('Warrant Canary - Zmey');

		this.meta.updateTag({
			name: 'description',
			content:
				"Zmey's warrant canary — a periodically-refreshed statement confirming no secret or compelled government data request has ever been received.",
		});

		this.meta.updateTag({
			property: 'og:title',
			content: 'Warrant Canary - Zmey',
		});

		this.meta.updateTag({
			property: 'og:description',
			content:
				'A dated, monthly-refreshed statement. If it stops updating, treat that as significant.',
		});

		this.meta.updateTag({
			property: 'og:url',
			content: 'https://zmey.chat/warrant-canary',
		});
	}
}
