import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lawyer',
  templateUrl: './lawyer.component.html'
})
export class LawyerComponent implements OnInit {

  @Input() lawyer: any = {};
  @Input() skills: any = {};

  env: any = environment;

  constructor() { }

  ngOnInit(): void {
    console.log(this.skills);
  }

  getLawyer() {
  }

}
