import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from '../model/skill';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  URL = "https://backend-new-portfolio-sansembbb.onrender.com/skill";

  constructor(private httpClient:HttpClient) { }

  // OBSERVABLE: ANGULAR USA OBSERVABLE PARA LAS PETICIONES ASINCRONAS
  public getSkills(): Observable<Skill> {
    return this.httpClient.get<Skill>(this.URL + "/traer");
  }

  public getSkill(id:number): Observable<Skill> {
    return this.httpClient.get<Skill>(this.URL + "/traer/" + id);
  }
  
}
