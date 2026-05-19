import { Routes } from '@angular/router';
import { Acceuil } from '../acceuil/acceuil';
import { Publiclayout } from '../layouts/publiclayout/publiclayout';
impo

export const PublicRoutes: Routes = [
  {
    path: '',
    component: Publiclayout,
    children: [
      {
        path: '',
        component: Acceuil
      },
      {
        path: 'acceuil',
        component: Acceuil
      },
      {
        path: 'auth',
        loadComponent: () =>
          import('../auth/auth').then(m => m.Auth)
      },
      {
        path: 'register',
        loadComponent: () =>
          import('../auth/register').then(m => m.Register)
      }
    ]
  }
];