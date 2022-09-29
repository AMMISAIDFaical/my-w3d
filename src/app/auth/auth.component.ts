import { User } from './../models/User';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor() { }
  auth(form: NgForm):void{
    const User : User = {
        'username':form.value.username,
        'password':form.value.password
    }
    console.log(User.username);
    console.log(User.password);
  }
  ngOnInit(): void {
  }

}
