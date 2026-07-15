import { Routes } from '@angular/router';
import { NavbarItem } from './types/navbar-item';
import { Home } from './pages/home/home';
import { SecPrivacy } from './pages/sec-privacy/sec-privacy';
import { About } from './pages/about/about';
import { WarrantCanary } from './pages/warrant-canary/warrant-canary';
import { Download } from './pages/download/download';

export const enum ROUTES {
	HOME = 'home',
	SEC_PRIVACY = 'security-privacy',
	ABOUT = 'about',
	WARRANT_CANARY = 'warrant-canary',
	DOWNLOAD = 'download',
}

export const NAV_BAR_ROUTES: readonly NavbarItem[] = [
	{
		label: 'Home',
		path: ROUTES.HOME,
		icon: 'ti-home',
	},
	{
		label: 'Security & Privacy',
		path: ROUTES.SEC_PRIVACY,
		icon: 'ti-lock',
	},
	{
		label: 'About',
		path: ROUTES.ABOUT,
		icon: 'ti-info-circle',
	},
	{
		label: 'Warrant Canary',
		path: ROUTES.WARRANT_CANARY,
		icon: 'ti-shield-lock',
	},
	{
		label: 'Download',
		path: ROUTES.DOWNLOAD,
		icon: 'ti-download',
	},
];

export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: ROUTES.HOME },
	{ path: ROUTES.HOME, component: Home },
	{ path: ROUTES.SEC_PRIVACY, component: SecPrivacy },
	{ path: ROUTES.ABOUT, component: About },
	{ path: ROUTES.WARRANT_CANARY, component: WarrantCanary },
	{ path: ROUTES.DOWNLOAD, component: Download },
];
