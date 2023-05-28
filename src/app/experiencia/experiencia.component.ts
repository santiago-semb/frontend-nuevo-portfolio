import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from '../services/experiencia.service';
import { Experiencia } from '../model/experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias: Experiencia[] = [];

  constructor(private expService: ExperienciaService){}

  ngOnInit(): void {
    this.expService.getExperiencias().subscribe(data => {
      // CREAR ARRAY Y RECORRERLO PARA SABER CUANTOS REGISTROS TIENE
      let todasLasExp = [];
      for(let i=0; i<500; i++){
        if(data[i] != undefined){
          todasLasExp.push(data[i]);
        }
      }
      // RECORRER EL ARRAY SABIENDO CUANTOS REGISTROS TIENE
      for(let i=0; i<todasLasExp.length; i++){
        this.experiencias.push(data[i]);
      }
    });
  }

}
