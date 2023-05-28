import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  URL = "https://backend-new-portfolio-sansembbb.onrender.com/exp";

  constructor(private httpClient:HttpClient) { }

  // OBSERVABLE: ANGULAR USA OBSERVABLE PARA LAS PETICIONES ASINCRONAS
  public getExperiencias(): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.URL + "/traer");
  }

  public getExperiencia(id:number): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.URL + "/traer/" + id);
  }
  
}
