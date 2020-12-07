import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private alertify: AlertifyService) { }

  ngOnInit() {
  }

  loggedin(){
    return localStorage.getItem('token');
  }
  onLogout(){
    localStorage.removeItem('token');
    this.alertify.success('You are logged out');
  }
}
