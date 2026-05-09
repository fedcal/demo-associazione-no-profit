import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Famiglie Insieme APS — Sostegno famiglie fragili Torino dal 1995'
  },
  {
    path: 'progetti',
    loadComponent: () => import('./pages/progetti/progetti.component').then((m) => m.ProgettiComponent),
    title: 'I nostri progetti — Famiglie Insieme APS'
  },
  {
    path: 'chi-siamo',
    loadComponent: () => import('./pages/chi-siamo/chi-siamo.component').then((m) => m.ChiSiamoComponent),
    title: 'Chi siamo — Famiglie Insieme APS'
  },
  {
    path: 'donare',
    loadComponent: () => import('./pages/donare/donare.component').then((m) => m.DonareComponent),
    title: 'Dona ora — Famiglie Insieme APS'
  },
  {
    path: 'diventa-volontario',
    loadComponent: () => import('./pages/diventa-volontario/diventa-volontario.component').then((m) => m.DiventaVolontarioComponent),
    title: 'Diventa volontario — Famiglie Insieme APS'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
