import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';
import { Greeting } from './greeting.interface';
import 'rxjs/add/operator/map'

@Injectable()
export class UserformService {

  constructor(private http: Http) {}

  public submitUserForm(greeting : Greeting): Observable<Response> {

    console.log(greeting)

    const url = 'http://localhost:8080/greeting'
    const headers = new Headers();
    headers.append('Content-Type','application/json; charset=utf=8');
    return this.http.post(url, greeting, headers);
  }
}
