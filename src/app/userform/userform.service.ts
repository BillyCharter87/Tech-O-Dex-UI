import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Registrant } from './registrant.interface';
import 'rxjs/add/operator/map'


@Injectable()
export class UserformService {

  constructor(private http: HttpClient) {}

  public submitUserForm(registrant : Registrant): Observable<any> {

    const url = 'http://localhost:8080/registration';
    const headers = new HttpHeaders();
    const options = {headers, responseType: 'text' as 'text'};
    headers.append('Content-Type','application/json charset=utf=8');
    return this.http.post(url, registrant, options);
  }
}
