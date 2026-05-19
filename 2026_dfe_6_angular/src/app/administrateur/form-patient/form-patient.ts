import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PatientService } from '../../patient-service';

@Component({
  selector: 'app-form-patient',
  imports: [CommonModule, ReactiveFormsModule], // On doit importer pour pouvoir utiliser les formulaires
  templateUrl: './form-patient.html',
  styleUrl: './form-patient.css',
})
export class FormPatient implements OnInit{

  isEdit = false;
  idPatient:any;

  private activateRoute = inject(ActivatedRoute); // ActivatedRoute c'est l'objet qui permet de recuperer les parametres de l'URL

  patient:any; // c'est pour stocker les infos du patient qui vient du back-end 

  formPatient = new FormGroup({ 
    prenom : new FormControl(''),
    nom : new FormControl(''),
    mail : new FormControl(''),
    age : new FormControl('')
  })

  private http = inject(HttpClient) //on injecte le service HttpClient pour pouvoir faire des requetes http vers le back-end

  private router = inject(Router) // c'est pour la redirection après l'ajout du patient dans la base de données

  private service = inject(PatientService)

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    console.log(id);

    if(id){
      this.isEdit = true;
      this.idPatient = id;
      this.service.findPatient(id).subscribe(res => {
        this.patient = res;
        this.formPatient.patchValue({ // C'est pour recuperer les infod du patient et les afficher dans le formulaire au moment de la modification 
          prenom : this.patient.prenom,
          nom : this.patient.nom,
          mail : this.patient.mail,
          age : this.patient.age
        })
        console.log(this.formPatient.value)
        console.log(this.patient)
      }, error => {
        console.log(error);
      })
    } 
    else{
      this.isEdit = false;
    }

  }

  inputForm(){
    if(this.isEdit){
      console.log("edit");
      this.service.updatePatient(this.idPatient, this.formPatient.value).subscribe(res => {
        console.log("Patient modifié avec succès");
        console.log(res);
        this.router.navigate(['administration/patient']);
      }, error => {
        console.log("Erreur lors de la modification du patient")
        console.log(error);
      })
    } else{
      let data = this.formPatient.value // ON recupere toutes les champs tapes sur la formulaire
      this.service.storePatient(data).subscribe(res=> { // Observable avec subscribe
        console.log("Patient ajouté avec succès");
        console.log(res);
        this.router.navigate(['administration/patient']);
      }, error => {
        console.log("Erreur lors de l'ajout du patient dans la partie back-end")
        console.log(error);
      });
    }
  }

} 

