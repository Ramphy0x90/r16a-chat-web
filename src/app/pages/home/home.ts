import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ROUTES } from '../../app.routes';

@Component({
	selector: 'app-home',
	imports: [RouterLink],
	templateUrl: './home.html',
	styleUrl: './home.css',
	host: { class: 'page' },
})
export class Home {
	readonly SEC_PRIVACY_ROUTE = ROUTES.SEC_PRIVACY;
	readonly DOWNLOAD_ROUTE = ROUTES.DOWNLOAD;
}
