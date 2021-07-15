import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* ROUTES */
import { APP_ROUTING } from './app.routes';

/* COMPONENTS */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PreguntasComponent } from './components/shared/preguntas/preguntas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PreguntasComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
