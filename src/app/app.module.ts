
/* */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HashLocationStrategy } from '@angular/common';

/* ROUTES */
import { APP_ROUTING } from './app.routes';

/* COMPONENTS */
import { AppComponent } from './app.component';

/* MODULES */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PublicModule } from './components/public/public.module';
import { SecureModule } from './components/secure/secure.module';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    PublicModule,
    SecureModule,
    SocialLoginModule,
  ],
  providers: [
    HashLocationStrategy,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '656997571360-vdgl3jnrstoiec1ibh47pabmhvhe5pl0.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
