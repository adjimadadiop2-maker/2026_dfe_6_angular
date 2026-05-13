import { Injectable } from '@angular/core';
import { Router } from 'express';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PatientService {
   private http = inject(HttpClient);
  host = "http://localhost:3001";

   
 getPatients(){
   return this.http.get<any[]>(this.host+"/patients");
   
 }
 storePatient(data:any){
   this.http.post(this.host+"/patients",data);
   return this.http.post(this.host+"/patients",data);
   
 
 }
 findpatient(id:any){
  return this.http.get(this.host+"/patients/"+id);  
 }
 updatePatient(id:any,data:any){
  console.log("test la methode edit",data);  
  return this.http.put(this.host+"/patients/"+id,data);
 }
 deletePatient(id: number) {
  return this.http.delete(`http://localhost:3001/patients/${id}`);
 }


   

  
}
