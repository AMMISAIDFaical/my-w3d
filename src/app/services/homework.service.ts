import { IHomework } from './../models/IHomework';
import { Homework } from './../models/Homework';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeworkService {
  constructor(private http : HttpClient) { }

  private url = "http://localhost:5263/api/Homework";

  getAllBlenderHomework() : Observable<IHomework[]>
  {
    return this.http.get<any>(this.url+'/Allblender');
  }
  getAllUnityHomework() : Observable<IHomework[]>
  {
    return this.http.get<any>(this.url+'/Allunity');
  }
}
