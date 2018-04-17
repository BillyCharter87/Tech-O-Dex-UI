import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';

import 'rxjs/add/operator/map'

@Injectable()
export class UserformService {

  constructor(private http: Http) {}

  public submitUserForm(data): Observable<Response> {

    console.log(data)

    const url = 'http://localhost:8080/greeting'

    const headers = new Headers();
    headers.append('Content-Type','application/json; charset=utf=8');
    // const body = data;

    return this.http.post(url, data, headers);
  }
}
