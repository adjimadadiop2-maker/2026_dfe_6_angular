import { Injectable } from '@angular/core';
import { Router } from 'express';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class PatientService {
   private http = inject(HttpClient);
  host = "http://localhost:3000";

   
 getPatients(){
   return this.http.get(this.host+"/patients");
   
 }
 storePatient(data:any){
   this.http.post(this.host+"/patients",data);
   return this.http.post(this.host+"/patients",data);
   
 
 }

   

  
}
