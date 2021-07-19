import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionModel } from 'src/app/models/question.model';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  URL = 'http://127.0.0.1:8000'


  constructor(private http: HttpClient) { }

  async addQuestion(Question: QuestionModel) {
    let send = {
      'people_id': Question.id,
      'text': Question.text
    }
    return this.http.post(this.URL + '/api/question', send).toPromise();
  }

  countQuestion() {
    return this.http.get(this.URL + '/api/question/count').toPromise();
  }

}
