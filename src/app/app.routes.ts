import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'experiments',
    pathMatch: 'full',
  },
  {
    path: 'experiments',
    loadComponent: () =>
      import('./experiments/experiments.component').then(
        (m) => m.ExperimentsComponent
      ),
  },
  {
    path: 'experiments/:id',
    loadComponent: () =>
      import(
        './experiments/experiments-details/experiments-details.component'
      ).then((m) => m.ExperimentsDetailsComponent),
  },
];
