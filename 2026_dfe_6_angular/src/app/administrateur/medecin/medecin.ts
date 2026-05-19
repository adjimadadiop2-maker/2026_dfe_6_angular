import { CommonModule } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MedecinService } from '../../medecin-service';

@Component({
  selector: 'app-medecin',
  imports: [CommonModule, AsyncPipe],
  templateUrl: './medecin.html',
  styleUrl: './medecin.css',
})
export class Medecin implements OnInit {
  title = 'Médecins';
  Medecins2!: Observable<any[]>;

  constructor(private router: Router, private service: MedecinService) {}

  ngOnInit() {
    this.Medecins2 = this.service.getMedecins();
  }

  getEmail(): string {
    return 'contact@cabinet.com';
  }

  getInfoMedecin() {
    this.router.navigate(['ajouter-medecin']);
  }

  editMedecin(item: any) {
    this.router.navigate(['edit-medecin', item.id]);
  }

  deleteMedecin(id: any) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce médecin ?')) {
      this.service.deleteMedecin(id).subscribe(
        () => {
          this.router.navigate(['medecin']);
        },
        (error) => {
          console.log('Erreur lors de la suppression du médecin');
          console.log(error);
        }
      );
    }
  }
}
