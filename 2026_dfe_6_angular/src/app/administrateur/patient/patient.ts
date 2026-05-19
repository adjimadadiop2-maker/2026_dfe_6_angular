import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { get } from 'http';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { PatientService } from '../../patient-service';

@Component({
  selector: 'app-patient',
  imports: [AsyncPipe],
  templateUrl: './patient.html',
  styleUrl: './patient.css',
})
export class Patient{
  title = 'Patients' // Title est un attribut de la classe Patient, il est initialisé à la valeur 'patient'.

  Patients2!:Observable<any>;

  constructor(
    private router: Router, 
    private http:HttpClient,
    private service:PatientService,
  ) { // Injection de dependance du service Router dans le constructeur de la classe Patient, ce qui permet d'utiliser les fonctionnalités de navigation dans ce composant.
     
  }

  loading=true;
  ngOnInit() { // Des qu'on charge cette methode cette methode est chargée automatiquement, elle est utilisée pour initialiser le composant et effectuer des tâches d'initialisation, comme la récupération de données ou la configuration de l'état initial du composant. Cette methode doit etre forcement implémentée dans la classe Patient
    console.log('Le composant Patient a été initialisé'); // Appel de la methode getPatients du service PatientService pour récupérer les données des patients et les stocker dans l'attribut Patients2. L'attribut Patients2 est de type Observable, ce qui signifie qu'il peut être utilisé pour gérer des flux de données asynchrones, comme les réponses d'une requete HTTP.
    this.Patients2 = this.service.getPatients();
  }

  // l'interpolation c'est une technique qui permet d'afficher des données dynamiques dans le template HTML d'un composant Angular. Elle utilise des doubles accolades {{ }} pour entourer une expression qui est évaluée et affichée dans le template. Par exemple, si vous avez un attribut title dans votre composant, vous pouvez l'afficher dans le template en utilisant l'interpolation comme ceci : {{ title }}. Lorsque le composant est rendu, la valeur de l'attribut title sera affichée à la place de l'expression {{ title }} dans le template.

  getSomme(a: number , b: number): number{
    return a + b;
  }

  getEmail():string{
    return "exemple@gmail.com"
  }

  getInfoPatient(){
    this.router.navigate(['administration/direction'])
  }

  // getPatients(){ // Cette methode utilise le service HttpClient pour effectuer une requete GET vers l'URL 'http://localhost:3000/patients' et retourne un Observable qui contient la réponse de la requete. L'observable est ensuite utilisé dans la methode ngOnInit pour récupérer les données des patients et les stocker dans l'attribut Patients2.
  //   let patient = this.http.get('http://localhost:3000/patients');
  //   return patient;
  //   // Observable c'est la reponse d'un serveur et c'est la fonction subscribe qui permet de traiter la requete http
  // }
  
  editPatient(item:any){
    console.log("Modification des informations du patient")
    console.log(item)
    this.router.navigate(['administration/edit-patient',item.id])
  }

  deletePatient(id:any){
    if(confirm("Êtes-vous sûr de vouloir supprimer ce patient ?")){
      this.service.deletePatient(id).subscribe(res => {
        this.router.navigate(['administration/patient']);
      }, error => {
        console.log("Erreur lors de la suppression du patient")
        console.log(error);
    })
    }
  }

  // l'interpolation c'est le fait d'utiliser les 
}











































































































