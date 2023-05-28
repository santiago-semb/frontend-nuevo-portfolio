import { Component, OnInit } from '@angular/core';
import { EstudiosService } from '../services/estudios.service';
import { Estudio } from '../model/estudios';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  estudios: Estudio[] = [];

  constructor(private estudiosService: EstudiosService){}

  ngOnInit(): void {
    this.estudiosService.getEstudios().subscribe(data => {
      // CREAR ARRAY Y RECORRERLO PARA SABER CUANTOS REGISTROS TIENE
      let todasLosEstudios = [];
      for(let i=0; i<500; i++){
        if(data[i] != undefined){
          todasLosEstudios.push(data[i]);
        }
      }
      // RECORRER EL ARRAY SABIENDO CUANTOS REGISTROS TIENE
      for(let i=0; i<todasLosEstudios.length; i++){
        this.estudios.push(data[i]);
      }
    });
  }

}
