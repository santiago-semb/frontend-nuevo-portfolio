import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = "https://backend-new-portfolio-sansembbb.onrender.com/persona";

  constructor(private httpClient:HttpClient) { }

  // OBSERVABLE: ANGULAR USA OBSERVABLE PARA LAS PETICIONES ASINCRONAS
  public getPersonas(): Observable<Persona> {
    return this.httpClient.get<Persona>(this.URL + "/traer");
  }

  public getPersona(id:number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.URL + "/traer/" + id);
  }
  
}
