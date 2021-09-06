import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private readonly httpRouter: Router){}

  breakpoint: number = 0;
  title = 'legalmedia';
  token: any;

  ngOnInit() {
    this.token = localStorage.getItem('token');
    if (this.token) {
      this.httpRouter.navigate(['cuenta']);
    }
  }

  logout() {
    localStorage.removeItem('token');
  }

}
