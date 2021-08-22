import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './auth/home/home.component';
import { MyInterceptorInterceptor } from './_interceptors/my-interceptor.interceptor';
import { AuthService } from './service/auth.service';
import { RoutingGuard } from './_guards/routing.guard';
import { LoaderService } from './service/loader.service';
import { MyLoaderComponent } from './components/my-loader/my-loader.component';
import { LoaderInterceptorInterceptor } from './_interceptors/loader-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    MyLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    RoutingGuard,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptorInterceptor , multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorInterceptor , multi: true }


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
