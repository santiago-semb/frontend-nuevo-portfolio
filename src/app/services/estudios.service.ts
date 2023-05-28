import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Estudio } from '../model/estudios';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {

  URL = "https://backend-new-portfolio-sansembbb.onrender.com/estudio";

  constructor(private httpClient:HttpClient) { }

  // OBSERVABLE: ANGULAR USA OBSERVABLE PARA LAS PETICIONES ASINCRONAS
  public getEstudios(): Observable<Estudio> {
    return this.httpClient.get<Estudio>(this.URL + "/traer");
  }

  public getEstudio(id:number): Observable<Estudio> {
    return this.httpClient.get<Estudio>(this.URL + "/traer/" + id);
  }
  
}
