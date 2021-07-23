import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LawyerModel } from 'src/app/models/lawyer.model';
import { environment } from 'src/environments/environment';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LawyerService {

  constructor(private http: HttpClient) { }

  getLawyer() {

    return this.http.get(environment.apiUrl + '/lawyer').pipe(
      map(
        this.lawyersArr,
        delay(0)
      )
    );

  }

  async searchLawyer(Lawyer: Object) {
    return this.http.post(environment.apiUrl + '/lawyer/search', Lawyer).pipe(
      map(
        this.lawyersArr,
        delay(0),
       )
     )
  }

  private lawyersArr(LawyerObj: any) {

    const lawyers: LawyerModel[] = [];

    Object.keys(LawyerObj.data).forEach(key => {

      const lawyer: LawyerModel = LawyerObj.data[key];

      lawyers.push(lawyer);
      
    });

    return lawyers;
    
  }


}
