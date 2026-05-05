import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Patient } from './patient/patient';
import { FormPatient } from './form-patient/form-patient';

export const routes: Routes = [
    {path: '', redirectTo: 'patient', pathMatch:'full'},
    {path: 'patient', component: Patient},
    {path: 'direction', component: FormPatient},
    { path: 'formpatient/:id', component: FormPatient }

];
