import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { TruncateModule } from 'ng2-truncate';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'login',component: LoginComponent },
  
    { path: '',component: HomeComponent },

  
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
        RouterModule.forRoot(appRoutes),

    BrowserModule,
    FormsModule,
    HttpModule,
    TruncateModule,
    SlimLoadingBarModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
