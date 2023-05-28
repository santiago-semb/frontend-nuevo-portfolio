import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../services/proyectos.service';
import { Proyecto } from '../model/proyecto';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[] = [];

  constructor(private experienciaService: ProyectosService){}

  ngOnInit(): void {
    this.experienciaService.getProyectos().subscribe(data => {
      // CREAR ARRAY Y RECORRERLO PARA SABER CUANTOS REGISTROS TIENE
      let todasLosProyectos = [];
      for(let i=0; i<500; i++){
        if(data[i] != undefined){
          todasLosProyectos.push(data[i]);
        }
      }
      // RECORRER EL ARRAY SABIENDO CUANTOS REGISTROS TIENE
      for(let i=0; i<todasLosProyectos.length; i++){
        this.proyectos.push(data[i]);
      }
    });
  }

}
