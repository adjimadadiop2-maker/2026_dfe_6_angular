import { Routes } from '@angular/router';
import { Acceuil } from '../acceuil/acceuil';
import { PublicLayout } from '../layouts/public-layout/public-layout';
import { Auth } from './auth/auth';
import { Register } from './register/register';

export const publicRoutes: Routes = [
    {path: '', component: PublicLayout, 
        children: [
            {path: '', redirectTo: 'acceuil', pathMatch: 'full'}, // C'est la route par defaut, elle redirige vers la route 'acceuil' lorsque l'utilisateur accède à la racine de l'application.
            {path: 'acceuil', component: Acceuil},           
            {path: 'auth', component: Auth},
            {path: 'register', component: Register}
        ]
    }, 

];