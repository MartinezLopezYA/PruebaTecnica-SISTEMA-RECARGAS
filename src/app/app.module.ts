import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertasComponent } from './containers/utils/alertas/alertas.component';
import { LoginComponent } from './containers/auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecargaComponent } from './containers/recargas/recarga/recarga.component';
import { JwtInterceptor } from './jwt.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    AlertasComponent,
    LoginComponent,
    RecargaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
