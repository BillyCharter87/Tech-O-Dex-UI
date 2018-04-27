import {Injectable} from "@angular/core";
import {Tech} from "./tech.interface";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class TableService {

  constructor(private http: HttpClient) {}

  getAllTechs(technology: Tech): Observable<any> {

    console.log(technology)

    const url = 'http://localhost:8080/findAll/?tech=' + technology;
    const headers = new HttpHeaders();
    headers.append('Content-Type','application/json charset=utf=8');
    return this.http.get(url);
  }
}
