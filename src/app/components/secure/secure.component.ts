import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {


  user: any;

  constructor(private http: HttpClient,
              private router: Router) { }

  ngOnInit(): void {

    const header = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    this.http.get('http://127.0.0.1:8000/api/user', {headers: header}).subscribe(
      (result: any) => {
        this.user = result;
      },
      (error: any) => {
        console.log(error);
        localStorage.removeItem('token');
        this.router.navigate(['/']);
      }
    )
  }

}
