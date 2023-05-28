import { Injectable } from '@angular/core';
import { Proyecto } from '../model/proyecto';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  URL = "https://backend-new-portfolio-sansembbb.onrender.com/proyecto";

  constructor(private httpClient:HttpClient) { }

  // OBSERVABLE: ANGULAR USA OBSERVABLE PARA LAS PETICIONES ASINCRONAS
  public getProyectos(): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.URL + "/traer");
  }

  public getProyecto(id:number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.URL + "/traer/" + id);
  }


}
