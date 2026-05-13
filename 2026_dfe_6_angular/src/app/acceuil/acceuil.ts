import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './acceuil.html',
  styleUrls: ['./acceuil.css']
})
export class Acceuil {

  isLoggedIn = false;

  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/auth']);
  }
  logout() {
  localStorage.removeItem('token');
  this.isLoggedIn = false;
  
  }
  




 
}