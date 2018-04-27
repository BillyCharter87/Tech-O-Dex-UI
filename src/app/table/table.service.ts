
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Car} from "./table.interface";

@Injectable()
export class TableService {

  constructor(private http: Http) {}

  getAllTechs(tech: String) {
    return this.http.get('http://localhost:8080/findAll', tech)
      .toPromise()
      .then(res => <Car[]> res.json().data)
      .then(data => { return data; });
  }
}
