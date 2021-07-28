import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question/question.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
})
export class PreguntasComponent implements OnInit {

  preguntas: any;

  constructor(private __questionService: QuestionService) { }

  async ngOnInit() {

    await this.getLastPreguntas();
    
  }

  async getLastPreguntas() {
    this.__questionService.lastQuestion()
      .then((response:any) => {
        
        this.preguntas = response.data;

      });
  }

}
