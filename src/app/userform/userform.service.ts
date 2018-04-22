import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';
import { Registration } from './registration.interface';
import 'rxjs/add/operator/map'

@Injectable()
export class UserformService {

  constructor(private http: Http) {}

  public submitUserForm(reg : Registration): Observable<Response> {

    const url = 'http://localhost:8080/registration'
    const headers = new Headers();
    headers.append('Content-Type','application/json charset=utf=8');
    return this.http.post(url, reg, headers);
  }
}
