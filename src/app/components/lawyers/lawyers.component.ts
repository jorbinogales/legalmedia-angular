import { Component, OnInit } from '@angular/core';
import { LawyerService } from 'src/app/services/laywer/lawyer.service';

@Component({
  selector: 'app-lawyers',
  templateUrl: './lawyers.component.html'
})
export class LawyersComponent implements OnInit {

  lawyers: any[] = [];

  constructor(private __lawyerService: LawyerService) { }

  ngOnInit(): void {
    this.lawyers = this.__lawyerService.getLaywers();
  }

}
