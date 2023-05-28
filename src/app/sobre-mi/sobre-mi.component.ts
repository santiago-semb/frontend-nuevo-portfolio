import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../services/persona.service';
import { Persona } from '../model/persona';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  santiago:Persona;

  constructor(private personaService: PersonaService){}

  ngOnInit(): void {
    this.personaService.getPersona(1).subscribe(data => {
      this.santiago = new Persona(data.nombre,data.apellido,data.edad,data.fecha_de_nacimiento,data.telefono,data.email,data.direccion,data.descripcion,data.img);
    });
  }

}
