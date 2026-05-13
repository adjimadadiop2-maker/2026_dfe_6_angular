import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { PatientService } from '../../patient-service';


@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patient.html',
  styleUrls: ['./patient.css'],
})

export class Patient implements OnInit
{
    title = 'Patients';


  tableauPatients2 :any = [];
  
    constructor(private router: Router,private patientService:PatientService) {
      
    }
      ngOnInit(): void {
    this.loadPatients();
  }

    loadPatients(): void {
      console.log ("tester la methode");
      this.patientService.getPatients().subscribe({
        next: (res:any[]) => {
          
          this.tableauPatients2 = res;
        },
        error: (err) => {
          console.error('Erreur lors de la récupération des patients:', err);
          console.log(err);
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
    this.router.navigate(['formpatient']);

  }
  editPatient(data: any) {
    console.log("PATIENT =", data);
  this.router.navigate(['edit-patient', data.id]);
  }
  deletePatient(id: any) {
  console.log(id);

  this.patientService.deletePatient(id).subscribe({
    next: () => {
      console.log("Patient supprimé");

    
      this.loadPatients();
    },
    error: (err) => {
      console.error("Erreur suppression", err);
    }
  });
}

  
  



}