import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { listSkillModel } from 'src/app/models/listSkill.model';
import { environment } from 'src/environments/environment';
import { map, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ListSkillService {

  constructor(private http: HttpClient) { }
  
  getListSkill() {

    return this.http.get(environment.apiUrl + '/listskill').pipe(
      map(
        this.listSkillArr,
        delay(0)
      )
    );
  }

  private listSkillArr(listSkillObj:any) {
    const listSkills: listSkillModel[] = [];

    Object.keys(listSkillObj.data).forEach(key => {

      const skill: listSkillModel = listSkillObj.data[key];
      
      listSkills.push(skill);

    });

    return listSkills;
  }
}
