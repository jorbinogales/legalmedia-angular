import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeopleModel } from 'src/app/models/people.model';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class PeopleService {


  constructor(private http: HttpClient) { }

  addPeople(People: PeopleModel){

    let send = {
      'email': People.email,
    }

    return this.http.post(environment.apiUrl + '/people', send).toPromise();
  }
  
}
