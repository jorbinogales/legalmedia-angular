/* NG MODULE */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* FORMS MODULE */

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* BOOSTRAP */
import { RatingModule } from 'ngx-bootstrap/rating';

/* ROUTING */
import { APP_ROUTING } from 'src/app/app.routes';

/* COMPONENTS */
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { LawyerComponent } from '../shared/lawyer/lawyer.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { PreguntasComponent } from '../shared/preguntas/preguntas.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { LoadingComponent } from '../shared/loading/loading.component';
import { LawyersComponent } from './lawyers/lawyers.component';
import { RegisterComponent } from '../register/register.component';



@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    LawyerComponent,
    LawyersComponent,
    NavbarComponent,
    FooterComponent,
    PreguntasComponent,
    LoadingComponent,
    RegisterComponent
  ],
  imports: [
    APP_ROUTING,
    RatingModule,
    IvyCarouselModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class PublicModule { }
