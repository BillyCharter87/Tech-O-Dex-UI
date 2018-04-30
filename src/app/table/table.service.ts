import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Tech } from "./tech.interface";

@Injectable()
export class TableService {

  constructor(private http: HttpClient) {}

  getAllTechs(technology) {

    const url = 'http://localhost:8080/findAll/?tech=' + technology.technology;
    return this.http.get(url)
      .toPromise()
      .then(res => <Tech[]> res)
      .then(data => { return data; });
  }

  deleteRegistrant(registrant) {

    console.log(registrant.id)

    const url = 'http://localhost:8080/delete'
    const headers = new HttpHeaders();
    const options = {headers, responseType: 'text' as 'text'};
    headers.append('Content-Type','application/json charset=utf=8');
    return this.http.post(url, registrant, options);
  }
}
