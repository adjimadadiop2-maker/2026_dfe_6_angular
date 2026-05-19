import { Routes } from '@angular/router';
import { Acceuil } from './acceuil/acceuil';
import { Publiclayout } from './layouts/publiclayout/publiclayout';

export const routes: Routes = [

  { path: '', redirectTo: 'acceuil', pathMatch: 'full' },

  { path:'public',loadChildren:() =>import('./public/public.routes').then(m => m.PublicRoutes)},

  {path:'administration',loadChildren:() =>import('./administrateur/administrateur.routes').then(m => m.AdministrateurRoutes) },

  { path: 'acceuil', component: Acceuil },

  { path: 'publiclayout', component: Publiclayout }

];