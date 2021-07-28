
/* */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HashLocationStrategy } from '@angular/common';

/* ROUTES */
import { APP_ROUTING } from './app.routes';

/* COMPONENTS */
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SecureComponent } from './components/secure/secure.component';
import { PublicModule } from './components/public/public.module';




@NgModule({
  declarations: [
    AppComponent,
    SecureComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    PublicModule
    
  ],
  providers: [ HashLocationStrategy ],
  bootstrap: [AppComponent]
})
export class AppModule { }
