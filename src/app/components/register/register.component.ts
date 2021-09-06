import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LawyerService } from 'src/app/services/laywer/lawyer.service';
import { SocialAuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.style.scss']
})
export class RegisterComponent implements OnInit {

  form: any = FormGroup;
  sending: boolean = false;
  results: any = '';
  @Output() tokenSuccesFull = new EventEmitter<string>();

  constructor(private FormBuilder: FormBuilder,
              private __lawyerService: LawyerService,
              private authService: SocialAuthService,
              private readonly httpRouter: Router) { }

  ngOnInit(): void {
      this.form = this.FormBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        password_confirmation: ['', [Validators.required]],
      });
    
  }

  async submit() {
      this.sending = true;
      const formData = this.form.getRawValue();
      this.results = await this.__lawyerService.storeLawyer(formData);
      if (this.results.token) {
        this.httpRouter.navigate(['cuenta']);
      }
      this.sending = false;
  }

  async signInWithGoogle(): Promise<void> {
      const result = await this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
      this.sending = true;
      this.results = await this.__lawyerService.storeLawyerSocial(result);
      this.sending = false;
  }

}
