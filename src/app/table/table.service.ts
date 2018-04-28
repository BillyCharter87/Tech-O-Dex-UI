import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class TableService {

  constructor(private http: HttpClient) {}

  getAllTechs(technology): Observable<any> {

    const url = 'http://localhost:8080/findAll/?tech=' + technology.technology;
    const headers = new HttpHeaders();
    headers.append('Content-Type','application/json charset=utf=8');
    return this.http.get(url);
  }
}
