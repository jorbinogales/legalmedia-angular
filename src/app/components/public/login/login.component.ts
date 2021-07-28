import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  form:any = FormGroup ;


  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private router:Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: '',
      password: '',
    })
  }

  submit() {
    const FormData = this.form.getRawValue();

    const data = {
      username: FormData.email,
      password: FormData.password,
      grant_type: 'password',
      client_id: environment.client_id,
      client_secret: environment.passport,
    };
      
    this.http.post(environment.userApiUrl + '/oauth/token', data).subscribe(
      (result: any) => {

        localStorage.setItem('token', result.access_token);
        this.router.navigate(['/secure']);
        
      },
      (error: any) => {
        console.log('error');
        console.log(error);
      }
    );
  }

}
