import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* BOOSTRAP */

import { RatingModule } from 'ngx-bootstrap/rating';



import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { LawyerComponent } from '../shared/lawyer/lawyer.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { PreguntasComponent } from '../shared/preguntas/preguntas.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { LoadingComponent } from '../shared/loading/loading.component';
import { APP_ROUTING } from 'src/app/app.routes';
import { LawyersComponent } from './lawyers/lawyers.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    LawyerComponent,
    LawyersComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    PreguntasComponent,
    LoadingComponent,
    RegisterComponent
  ],
  imports: [
    RatingModule,
    APP_ROUTING,
    IvyCarouselModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class PublicModule { }
