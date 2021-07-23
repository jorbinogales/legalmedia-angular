import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionModel } from 'src/app/models/question.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  async addQuestion(Question: QuestionModel) {
    let send = {
      'people_id': Question.id,
      'text': Question.text
    }
    return this.http.post(environment.apiUrl + '/question', send).toPromise();
  }

  countQuestion() {
    return this.http.get(environment.apiUrl + '/question/count').toPromise();
  }

  async lastQuestion() {
    return this.http.get(environment.apiUrl + '/question/last').toPromise();
  }

}
