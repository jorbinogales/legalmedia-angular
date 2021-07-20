import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

/* ROUTES */
import { APP_ROUTING } from './app.routes';

/* COMPONENTS */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PreguntasComponent } from './components/shared/preguntas/preguntas.component';
import { LawyersComponent } from './components/lawyers/lawyers.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LawyerComponent } from './components/shared/lawyer/lawyer.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PreguntasComponent,
    LawyersComponent,
    FooterComponent,
    LawyerComponent,
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpClientModule
  ],
  providers: [ HashLocationStrategy, HashLocationStrategy],
  bootstrap: [AppComponent]
})
export class AppModule { }
