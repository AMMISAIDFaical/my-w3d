import { IUser } from './../models/IUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from '../models/IResponse';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  invalideLogin!: boolean;


  constructor(private http: HttpClient, private router: Router) { }


  loginService(credentials: IUser) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    this.http.post<IUser>('http://localhost:5263/api/Auth/login', credentials, httpOptions).subscribe(
      res => {
        localStorage.setItem('jwt', JSON.stringify(res));
        this.router.navigate(["teacher-space"]);
        this.invalideLogin = false;
      });

  }

  getUser(): any {
    return localStorage.getItem('jwt');
  }
  logout():void{
     localStorage.clear();
  }
  
  isLoggedIn(): boolean {
    if (this.getUser() != null) {
      return true
    }
    else {
      return false;
   }
  }



}
