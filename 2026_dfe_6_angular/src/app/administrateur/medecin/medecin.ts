import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedecinService } from '../../medecin-service';
import { CommonModule } from '@angular/common';
  

@Component({
  selector: 'app-medecin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medecin.html',
  styleUrls: ['./medecin.css'],
})
export class MedecinComponent implements OnInit {

  title = 'Medecins';

  tableauMedecins: any[] = [];

  constructor(
    private router: Router,
    private medecinService: MedecinService
  ) {}

  ngOnInit(): void {
    this.loadMedecins();
  }

  loadMedecins(): void {
    console.log("tester la methode");

    this.medecinService.getMedecins().subscribe({
      next: (res: any[]) => {
        this.tableauMedecins = res;
      },

      error: (err) => {
        console.error('Erreur lors de la récupération des médecins:', err);
      }
    });
  }

  getSomme(a: number, b: number): number {
    return a + b;
  }

  getEmail(): string {
    return "seck@mail.com";
  }

  getInfoMedecin() {
    this.router.navigate(['formmedecin']);
  }

  editMedecin(data: any) {
    console.log("MÉDECIN =", data);

    this.router.navigate(['edit-medecin', data.id]);
  }

  deleteMedecin(id: any) {

    console.log(id);

    this.medecinService.deleteMedecin(id).subscribe({

      next: () => {

        console.log("Médecin supprimé");

        this.loadMedecins();
      },

      error: (err) => {
        console.error("Erreur suppression", err);
      }

    });
  }

}