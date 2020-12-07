import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AlertifyService } from './services/alertify.service';
import { NavBarComponent } from './components/navbar/navbar.component';
import { from } from 'rxjs';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
