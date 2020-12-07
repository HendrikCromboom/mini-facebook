import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AlertifyService } from './services/alertify.service';
import { NavBarComponent } from './components/navbar/navbar.component';
import { from } from 'rxjs';
import { HomeComponent } from './components/home/home.component';
import { AddFriendComponent } from './components/add-friend/add-friend.component';
import { FriendService } from './services/friend.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'add-friend', component: AddFriendComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddFriendComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule, //Template driven forms
    ReactiveFormsModule, //Reactive forms
    HttpClientModule
  ],
  providers: [
    AlertifyService,
    FriendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
