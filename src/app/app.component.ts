import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  breakpoint: number = 0;
  title = 'legalmedia';
  
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
  }

  logout() {
    localStorage.removeItem('token');
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }
}
