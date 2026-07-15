import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NAV_BAR_ROUTES, ROUTES } from '../../app.routes';
import { NavbarItem } from '../../types/navbar-item';

@Component({
	selector: 'app-footer',
	imports: [RouterLink],
	templateUrl: './footer.html',
	styleUrl: './footer.css',
	standalone: true,
})
export class Footer {
	navOptions: readonly NavbarItem[] = NAV_BAR_ROUTES;

	get footerRights(): string {
		const year = new Date().getFullYear();
		return `© ${year} R16a (Ramphy Aquino Nova). With ♥ but also a bit of hate.`;
	}
}
