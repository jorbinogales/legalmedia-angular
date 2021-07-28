import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  laywers: number = 125;
  loggedIn: boolean = false;


  constructor(private router: Router) { }

 ngOnInit() {
   this.loggedIn = localStorage.getItem('token') !== null;
 }
  
  logout() {
    this.loggedIn = false;
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  

}
