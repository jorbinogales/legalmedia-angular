import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: any = FormGroup;

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
    })
  }

  submit() {
    const formData = this.form.getRawValue();
    this.http.post(environment.userApiUrl + '/api/user', formData).subscribe(
      (result: any) => {
        this.router.navigate(['/secure']);
      },
      (error: any) => {
        console.log(error);
        console.log(error.error.errors)
      }
    )
  }

}
