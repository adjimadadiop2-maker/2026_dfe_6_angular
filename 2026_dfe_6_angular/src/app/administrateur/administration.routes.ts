import { Routes } from '@angular/router';
import { Patient } from './patient/patient';
import { FormPatient } from './form-patient/form-patient';
import { Medecin } from './medecin/medecin';
import { FormMedecin } from './form-medecin/form-medecin';
import { AdminLayout } from '../layouts/administration/admin-layout/admin-layout';

export const AdministrateurRoutes: Routes = [
    {path: '', component:AdminLayout, 
        children:[
            {path: '', redirectTo: 'patient', pathMatch: 'full'}, // C'est la route par defaut, elle redirige vers la route 'patient' lorsque l'utilisateur accède à la racine de l'application.
            {path: 'patient', component: Patient},
            {path: 'medecin', component: Medecin},
            {path: 'direction', component: FormPatient},

            {path: 'form-patient', component: FormPatient}, // form-patient : c'est le chemin d'URL pour accéder au composant FormPatient, et component: FormPatient indique que lorsque l'utilisateur navigue vers ce chemin, le composant FormPatient sera affiché.
            {path: 'ajouter-patient', component: FormPatient}, // et path: 'ajouter-patient' indique que lorsque l'utilisateur navigue vers ce chemin, le composant FormPatient sera affiché.
            {path: 'edit-patient/:id', component: FormPatient},

            {path: 'form-medecin', component: FormMedecin},
            {path: 'ajouter-medecin', component: FormMedecin},
            {path: 'edit-medecin/:id', component: FormMedecin}
        ]
    },
];