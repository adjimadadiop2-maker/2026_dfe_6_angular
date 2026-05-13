import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientService } from '../../patient-service';

@Component({
  selector: 'app-form-patient',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-patient.html',
  styleUrl: './form-patient.css',
})
export class FormPatient implements OnInit {

  isedit = false;
  idpatient: any;

  private activatedRoute = inject(ActivatedRoute);
  private patientService = inject(PatientService);

  formPatient = new FormGroup({
    prenom: new FormControl(''),
    nom: new FormControl(''),
    mail: new FormControl(''),
    age: new FormControl('')
  });

  ngOnInit(): void {


    const id = this.activatedRoute.snapshot.paramMap.get('id');

    console.log( id);

    if (id) {
    this.idpatient = id;
    this.isedit = true;

    this.patientService.findpatient(id).subscribe({
      next: (res: any) => {

        console.log("API RESPONSE =", res);

        const patient = res.data ?? res;

        this.formPatient.patchValue(patient);
      },
      error: (err) => console.error(err)
    });
    }

  };

    

  inputFormPatient() {
    if(this.isedit) {
      console.log('edit');
      this.patientService.updatePatient(this.idpatient, this.formPatient.value).subscribe({
        next: () => {
          console.log('patient modifier avec success');
        },
        error: (error) => {
          console.log('erreur de mise a jour', error);
        }
      });
    } else {
      console.log(this.formPatient.value);
      let data = this.formPatient.value;
      this.patientService.storePatient(data).subscribe({
        next: () => {
          console.log('donner envoyer  avec success');
        },
        error: (error) => {
          console.log('erreur d envoi', error);
        }
      });
    }

    

  
  }
}