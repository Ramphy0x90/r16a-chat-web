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
	readonly ABOUT_ROUTE = `/${ROUTES.ABOUT}`;
	readonly DOWNLOAD_ROUTE = `/${ROUTES.DOWNLOAD}`;
}
