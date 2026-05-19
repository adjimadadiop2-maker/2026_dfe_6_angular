import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet
  ],
  templateUrl: './acceuil.html',
  styleUrls: ['./acceuil.css']
})
export class Acceuil {

  isLoggedIn = false;

  constructor(private router: Router) {}

 goLogin() {
  this.router.navigateByUrl('/public/auth');
}

  register() {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
  }
}