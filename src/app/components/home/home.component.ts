import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question/question.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  activos: any;

  constructor(private _questionService: QuestionService) { }

  ngOnInit(): void {
    this.activos = 321;
  }

  realizarPregunta(texto:string) {
    this._questionService.addQuestion(texto);
  }

}
