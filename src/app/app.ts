import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from './navbar/navbar';
import { Sidebar } from './sidebar/sidebar';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Sidebar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
