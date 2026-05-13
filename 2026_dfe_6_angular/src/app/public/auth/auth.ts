import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.html',
  styleUrls: ['./auth.css']
})
export class Auth {

  email = '';
  password = '';
  isLogin = true;

  constructor(private router: Router) {}

  toggle() {
    this.isLogin = !this.isLogin;
  }

  submit() {
    if (this.email && this.password) {

      localStorage.setItem('token', 'demo-token');

      alert(this.isLogin ? 'Login réussi' : 'Compte créé');

      this.router.navigate(['/acceuil']);
    } else {
      alert('Remplir tous les champs');
    }
  }

}