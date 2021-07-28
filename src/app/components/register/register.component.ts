import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LawyerService } from 'src/app/services/laywer/lawyer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  form: any = FormGroup;
  sending: boolean = false;
  results: any;

  constructor(private FormBuilder: FormBuilder,
              private __lawyerService: LawyerService) { }

  ngOnInit(): void {
      this.form = this.FormBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        first_name: ['', [Validators.required]],
        last_name: ['', [Validators.required]],
        birth: ['', [Validators.required]],
      });
    
  }

  async submit() {
      this.sending = true;
    
      const formData = this.form.getRawValue();
      this.results = await this.__lawyerService.storeLawyer(formData);
    
      console.log(this.results);
    

      this.sending = false;
  }

}
