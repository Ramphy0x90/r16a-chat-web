import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ROUTES } from '../../app.routes';
import { ThemeService } from '../../services/theme.service';

@Component({
	selector: 'logo-btn',
	imports: [RouterLink],
	templateUrl: './logo-btn.html',
	styleUrl: './logo-btn.css',
	standalone: true,
})
export class LogoBtn {
	readonly HOME_ROUTE = ROUTES.HOME;

	constructor(protected readonly themeService: ThemeService) {}
}
