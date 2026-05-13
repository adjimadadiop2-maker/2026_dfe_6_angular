import { FormMedecin } from './formmedecin/formmedecin';
import { MedecinComponent } from './medecin/medecin';
import { FormPatient } from './form-patient/form-patient';
import { Patient } from './patient/patient';
import { Routes } from '@angular/router';       
import { Administrationlayouts } from '../layouts/administrationlayouts/administrationlayouts';

export const AdministrateurRoutes: Routes = [
  {path: '',component:Administrationlayouts, children:[
    { path: '', redirectTo: 'patient', pathMatch: 'full' },
    { path: 'patient', component: Patient },
    { path: 'formpatient', component: FormPatient },
    { path: 'edit-patient/:id', component: FormPatient },
    { path: 'medecin', component: MedecinComponent },
    { path: 'formmedecin', component: FormMedecin },
    {path: 'edit-medecin/:id', component: FormMedecin},
    {path: 'ajout-medecin', component: FormMedecin}

  ]},

  
 
];