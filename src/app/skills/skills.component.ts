import { Component, OnInit } from '@angular/core';
import { Skill } from '../model/skill';
import { SkillService } from '../services/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];

  constructor(private skillService: SkillService){}

  ngOnInit(): void {
    this.skillService.getSkills().subscribe(data => {
      // CREAR ARRAY Y RECORRERLO PARA SABER CUANTOS REGISTROS TIENE
      let todasLasSkills = [];
      for(let i=0; i<500; i++){
        if(data[i] != undefined){
          todasLasSkills.push(data[i]);
        }
      }
      // RECORRER EL ARRAY SABIENDO CUANTOS REGISTROS TIENE
      for(let i=0; i<todasLasSkills.length; i++){
        this.skills.push(data[i]);
      }
    });
  }

}
