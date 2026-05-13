import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Acceuil } from '../acceuil/acceuil';                 
import { Routes } from '@angular/router';
import { Publiclayout } from '../layouts/publiclayout/publiclayout';

export const PublicRoutes: Routes = [
 {path :'',component:Publiclayout},
  {path : 'acceuil', component: Acceuil},
  {path :'registrer',component: Acceuil},
  {path :'auth',component: Acceuil},
 
 
];