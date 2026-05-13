import { Component } from '@angular/core';

import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-administrationlayouts',
  standalone: true,
  imports: [Footer, Navbar, Sidebar],
  templateUrl: './administrationlayouts.html',
  styleUrls: ['./administrationlayouts.css'],
})
export class Administrationlayouts {}