import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HttpHeaders} from "@angular/common/http";

@Injectable()
export class ChartService {

  constructor(private http: HttpClient) { }

  findAllTech() : Observable<any> {
    const url = 'http://localhost:8080/findAllTech';
    const headers = new HttpHeaders();
    const options = {headers, responseType: 'text' as 'text'};
    headers.append('Content-Type','application/json charset=utf=8');
    return this.http.get(url, options);
  }

}
