import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthgodComponent } from './Login/authgod/authgod.component';
import { AthuGodTestComponent } from './athu-god-test/athu-god-test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterceptorInterceptor } from './service/interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AuthgodComponent,
    AthuGodTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClient,{ provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
