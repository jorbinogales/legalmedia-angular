import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeopleModel } from 'src/app/models/people.model';



@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  URL = 'http://127.0.0.1:8000'

  constructor(private http: HttpClient) { }

  addPeople(People: PeopleModel){

    let send = {
      'email': People.email,
    }

    return this.http.post(this.URL + '/api/people', send).toPromise();
  }
}
