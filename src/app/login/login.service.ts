import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user.interface";

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  public onLogin(user : User): Observable<any> {

    const url = 'http://localhost:8080/registration';
    const headers = new HttpHeaders();
    const options = {headers, responseType: 'text' as 'text'};
    headers.append('Content-Type','application/json charset=utf=8');
    return this.http.post(url, user, options);
  }

}
