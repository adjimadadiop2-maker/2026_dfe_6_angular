import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from '../patient-service';
@Component({
  selector: 'app-form-patient',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-patient.html',
  styleUrl: './form-patient.css',
})
export class FormPatient {
  formPatient=new FormGroup({
    prenom : new FormControl(''),
    nom : new FormControl(''),
    mail : new FormControl(''),
    age : new FormControl('')  
  });

   private http = inject(HttpClient);
   private router = inject(Router);
   private patientService = inject(PatientService);

  

  inputFormPatient(){
    console.log("tester");
    console.log(this.formPatient.value);
    let data = this.formPatient.value;
    this.patientService.storePatient(data).subscribe(()=>
    console.log("patient enregistré avec succès"));
    this.router.navigate(['patient']); 
  }
 



}
