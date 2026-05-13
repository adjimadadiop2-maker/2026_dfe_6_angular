import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MedecinService } from '../../medecin-service';
@Component({
  selector: 'app-formmedecin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formmedecin.html',
  styleUrls: ['./formmedecin.css'],
})
export class FormMedecin implements OnInit {

  isEdit = false;
  idMedecin: any;

  private activatedRoute = inject(ActivatedRoute);
  private medecinService = inject(MedecinService);

  formMedecin = new FormGroup({
    prenom: new FormControl(''),
    nom: new FormControl(''),
    specialite: new FormControl(''),
    email: new FormControl(''),
    telephone: new FormControl(''),
    fonction: new FormControl('')
  });

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.idMedecin = id;
      this.isEdit = true;

      this.medecinService.findmedecin(id).subscribe({
        next: (res: any) => {
          const medecin = res.data ?? res;
          this.formMedecin.patchValue(medecin);
        },
        error: (err) => console.error(err)
      });
    }
  }

  submitForm() {
    if (this.isEdit) {
      this.medecinService.updateMedecin(this.idMedecin, this.formMedecin.value).subscribe({
        next: () => console.log('Médecin modifié'),
        error: (err) => console.error(err)
      });
    } else {
      this.medecinService.storeMedecin(this.formMedecin.value).subscribe({
        next: () => console.log('Médecin ajouté'),
        error: (err) => console.error(err)
      });
    }
  }
}