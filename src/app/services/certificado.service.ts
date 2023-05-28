import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Certificado } from '../model/certificado';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {

  URL = "https://backend-new-portfolio-sansembbb.onrender.com/certificado";

  constructor(private httpClient:HttpClient) { }

  // OBSERVABLE: ANGULAR USA OBSERVABLE PARA LAS PETICIONES ASINCRONAS
  public getCertificados(): Observable<Certificado> {
    return this.httpClient.get<Certificado>(this.URL + "/traer");
  }

  public getCertificado(id:number): Observable<Certificado> {
    return this.httpClient.get<Certificado>(this.URL + "/traer/" + id);
  }
  
}
