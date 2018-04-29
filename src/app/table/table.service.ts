import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
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
}
