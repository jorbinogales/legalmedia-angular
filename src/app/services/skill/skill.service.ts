import { Injectable } from '@angular/core';
import { SkillModel } from 'src/app/models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor() { }

  getSkill() {
      
  }

  private SkillArr(SkillObj: any) {
    const skills: SkillModel[] = [];

    Object.keys(SkillObj).forEach(key => {
      const skill: SkillModel = SkillObj[key];
      skills.push(skill);
    });

    return skills;
  }
}
