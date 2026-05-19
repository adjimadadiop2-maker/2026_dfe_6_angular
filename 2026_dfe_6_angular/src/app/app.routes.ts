import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadChildren: () => import('./public/public.routes').then(m => m.publicRoutes) },
    {path: 'administration', loadChildren: () => import('./administrateur/administration.routes').then(m => m.AdministrateurRoutes)},
];