import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question/question.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  preguntas: any = 0;
  respuestas: number = 0;

  constructor(private __questionService: QuestionService) { }

  ngOnInit(): void {

    this.__questionService.countQuestion()
      .then(response => {
        this.preguntas = response;
      })
    
  }


}
