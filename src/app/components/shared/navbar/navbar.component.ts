import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  laywers: number = 125;

  constructor() { }

  ngOnInit(): void {
  }

}
