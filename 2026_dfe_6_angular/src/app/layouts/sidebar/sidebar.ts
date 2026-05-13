import { Component } from '@angular/core';
import { Patient } from '../../administrateur/patient/patient';
import { Content } from '../../content/content';

@Component({
  selector: 'app-sidebar',
  imports: [Content],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

}
