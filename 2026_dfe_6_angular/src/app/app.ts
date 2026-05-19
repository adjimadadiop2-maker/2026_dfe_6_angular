import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layouts/navbar/navbar'; // Importation du composant Navbar
import { Sidebar } from './layouts/administration/sidebar/sidebar';
import { Footer } from './layouts/footer/footer';

@Component({
  selector: 'app-root', // c'est le nom du composant
  imports: [RouterOutlet, Navbar, Sidebar, Footer], // c'est les composants qui sont utilisés dans ce composant
  templateUrl: './app.html', // C'est le fichier html de ce selecteur
  styleUrl: './app.css' // C'est le fichier css
})
export class App {
  protected readonly title = signal('my-app');
}
