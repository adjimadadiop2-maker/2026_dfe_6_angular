
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../patient-service';


@Component({
  selector: 'app-patient',
  imports: [],
  templateUrl: './patient.html',
  styleUrl: './patient.css',
})
export class Patient implements OnInit
{
    title = 'Patients';


  tableauPatients2 :any = [];
  
    constructor(private router: Router,private patientService:PatientService) {
      
    }

    ngOnInit(): void {
      console.log ("tester la methode");
      this.patientService.getPatients().subscribe({
        next: (res) => {
          console.log('Données reçues:', res);
          this.tableauPatients2 = res;
        },
        error: (err) => {
          console.error('Erreur lors de la récupération des patients:', err);
        }
      });
    }

  getSomme(a: number, b: number): number{
    return a + b;
  }
  getEmail():string{
    return"seck@mail.com";
  }


  getInfoPatient(){
    this.router.navigate(['direction']);

  }




editPatient(id: number) {
  this.router.navigate(['/formpatient', id]);
}

  
  



}