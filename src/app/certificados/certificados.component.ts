import { Component, OnInit } from '@angular/core';
import { CertificadoService } from '../services/certificado.service';
import { Certificado } from '../model/certificado';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})
export class CertificadosComponent implements OnInit {
  certificados: Certificado[] = [];

  constructor(private certificadoService: CertificadoService){}

  ngOnInit(): void {
    this.certificadoService.getCertificados().subscribe(data => {
       // CREAR ARRAY Y RECORRERLO PARA SABER CUANTOS REGISTROS TIENE
       let todasLosCertificados = [];
       for(let i=0; i<500; i++){
         if(data[i] != undefined){
          todasLosCertificados.push(data[i]);
         }
       }
       // RECORRER EL ARRAY SABIENDO CUANTOS REGISTROS TIENE
       for(let i=0; i<todasLosCertificados.length; i++){
         this.certificados.push(data[i]);
       }
    });
  }

}
