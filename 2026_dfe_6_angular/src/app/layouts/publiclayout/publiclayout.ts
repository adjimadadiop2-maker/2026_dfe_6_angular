import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-publiclayout',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './publiclayout.html',
  styleUrls: ['./publiclayout.css']
})
export class Publiclayout {

  isLoggedIn = false;

  login() {
    console.log('LOGIN CLICK OK');
    this.isLoggedIn = true;
  }

  register() {
    alert('Register page');
  }

  logout() {
    this.isLoggedIn = false;
  }
}