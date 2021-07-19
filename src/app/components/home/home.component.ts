import { Component, OnInit } from '@angular/core';

import { QuestionService } from 'src/app/services/question/question.service';
import { QuestionModel } from 'src/app/models/question.model';

import { PeopleService } from 'src/app/services/people/people.service';
import { PeopleModel } from 'src/app/models/people.model';


import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  send: any;
  position: number = 1;
  
  question = new QuestionModel();
  people = new PeopleModel();

  constructor(private __questionService: QuestionService,
              private __peopleService: PeopleService) { }

  ngOnInit(): void {
  }

  async next(Form: NgForm) {
    
    if (Form.invalid) {
      console.log('formulario invalido');
    } else {

      switch (this.position) {
          

          case 2:

                let people = await this.agregarPersona();
                await this.agregarPregunta(people);
          break;
        
          default:
          
              //
          break;
        
        }
      
      this.position++;

    }
  
  }

  async agregarPersona(): Promise<Object> {
   
    let resp: any;

    await this.__peopleService.addPeople(this.people)
      .then(response => {
          resp = response;
      }).catch(response => {
        console.log(response);
          resp = response.error.code;
      });
      
    if (resp === 'H0013') {
      this.send = false;
    } 
    
    return resp;
    
  }

  async agregarPregunta(People: any) {
    
    let questionArr = {
      'id': People[0].id,
      'text': this.question.text
    }

    await this.__questionService.addQuestion(questionArr)
      .then(response => {
        this.send = true;
      })
      .catch(response => {
        this.send = false;
      })
    
  }

}
