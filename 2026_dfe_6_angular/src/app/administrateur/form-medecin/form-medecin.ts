import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MedecinService } from '../../medecin-service';

@Component({
  selector: 'app-form-medecin',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-medecin.html',
  styleUrl: './form-medecin.css',
})
export class FormMedecin implements OnInit {
  isEdit = false;
  idMedecin: any;
  medecin: any;

  private activateRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private service = inject(MedecinService);

  formMedecin = new FormGroup({
    prenom: new FormControl(''),
    nom: new FormControl(''),
    mail: new FormControl(''),
    specialite: new FormControl(''),
  });

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.idMedecin = id;
      this.service.findMedecin(id).subscribe(
        (res) => {
          this.medecin = res;
          this.formMedecin.patchValue({
            prenom: this.medecin.prenom,
            nom: this.medecin.nom,
            mail: this.medecin.mail,
            specialite: this.medecin.specialite,
          });
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  inputForm() {
    if (this.isEdit) {
      this.service.updateMedecin(this.idMedecin, this.formMedecin.value).subscribe(
        (res) => {
          console.log('Médecin modifié avec succès');
          this.router.navigate(['administration/medecin']);
        },
        (error) => {
          console.log('Erreur lors de la modification du médecin');
          console.log(error);
        }
      );
    } else {
      const data = this.formMedecin.value;
      this.service.storeMedecin(data).subscribe(
        (res) => {
          console.log('Médecin ajouté avec succès');
          this.router.navigate(['administration/medecin']);
        },
        (error) => {
          console.log('Erreur lors de l ajout du médecin dans le back-end');
          console.log(error);
        }
      );
    }
  }
}
