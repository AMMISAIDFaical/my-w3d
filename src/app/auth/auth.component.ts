import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUser } from '../models/IUser';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private auth_serv: AuthService) {
  }
  auth(form: NgForm): void {
    let user:IUser =
    {
      'email': form.value.email,
      'password': form.value.password,
      username:'faical'
    }
    this.auth_serv.loginService(user);
    console.log(this.auth_serv.isLoggedIn());
  }
  ngOnInit(): void {
    console.log(this.auth_serv.isLoggedIn());
    console.log(this.auth_serv.getUser());
    console.log(this.auth_serv.getUser());

   }

}
