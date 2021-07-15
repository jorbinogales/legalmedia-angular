import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() {
    console.log('servicio listo para usar!!!');
  }

  addQuestion(texto: string) {
    console.log(texto);
  }
}
