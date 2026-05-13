import { Injectable } from '@angular/core';
import { Router } from 'express';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MedecinService {
   private http = inject(HttpClient);
  host = "http://localhost:3002";

   
 getMedecins(){
   return this.http.get<any[]>(this.host+"/medecins");
   
 }
 storeMedecin(data:any){
   this.http.post(this.host+"/medecin",data);
   return this.http.post(this.host+"/medecin",data);
   
 
 }
 findmedecin(id:any){
  return this.http.get(this.host+"/medecin/"+id);  
 }
 updateMedecin(id:any,data:any){
  console.log("test la methode edit",data);  
  return this.http.put(this.host+"/medecin/"+id,data);
 }
 deleteMedecin(id: number) {
  return this.http.delete(`http://localhost:3002/medecin/${id}`);
 }


   

  
}
