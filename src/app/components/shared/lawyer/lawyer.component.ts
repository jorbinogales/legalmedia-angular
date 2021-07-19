import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lawyer',
  templateUrl: './lawyer.component.html'
})
export class LawyerComponent implements OnInit {

  @Input() lawyer: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  getLawyer() {
    console.log(this.lawyer.id);
  }

}
