import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { routes } from './routes';
import {JwtInterceptor} from './interceptors/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(routes),
  ],
  providers: [
      {
          provide: HTTP_INTERCEPTORS,
          useClass: JwtInterceptor,
          multi: true
      }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
