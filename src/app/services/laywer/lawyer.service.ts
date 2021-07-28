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

    return this.http.get(environment.LawyerApiUrl + '/api/lawyer').pipe(
      map(
        this.lawyersArr,
        delay(0)
      )
    );

  }

  async searchLawyer(Lawyer: Object) {
    return this.http.post(environment.LawyerApiUrl + '/api/lawyer/search', Lawyer).pipe(
      map(
        this.lawyersArr,
        delay(0),
       )
     )
  }

  async storeLawyer(FormData: LawyerModel): Promise<any> {
    let resp: any;
    await this.http.post(environment.LawyerApiUrl + '/api/lawyer', FormData)
      .toPromise()
      .then((result: any) => {
        resp = result;
      })
      .catch((result: any) => {
        resp = result.error.errors;
      });
    
    return resp;
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
