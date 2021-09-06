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
    return this.http.post(environment.LawyerApiUrl + '/api/search', Lawyer).pipe(
      map(
        this.lawyersArr,
        delay(0),
       )
     )
  }

  async storeLawyer(FormData: LawyerModel): Promise<any> {
    let resp: any;
    await this.http.post(environment.LawyerApiUrl + '/api/register', FormData)
      .toPromise()
      .then((result: any) => {
        resp = result;
        console.log(result.token);
         localStorage.setItem('token', result.token);
      })
      .catch((result: any) => {
        resp = result.error.errors;
      });
    return resp;
  }

  async storeLawyerSocial(result: any): Promise<any>{
      const { email, name , photoUrl, provider } = result;
      const data = {
          email: email,
          name: name,
          photoUrl: photoUrl,
          provider: provider,
          client_id: environment.client_id,
          client_secret: environment.passport,
      };
    let resp: any;
    await this.http.post(environment.LawyerApiUrl + '/api/loginWithSocial', data)
      .toPromise()
        .then((result: any) => {
          resp = result;
          localStorage.setItem('token', result.token);
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
