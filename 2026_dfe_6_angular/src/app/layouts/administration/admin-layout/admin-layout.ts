import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
import { Footer } from '../../footer/footer';
import { Navbar } from '../../navbar/navbar';

@Component({
  selector: 'app-admin-layout',
  imports: [Sidebar, Footer, Navbar],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayout {

}
