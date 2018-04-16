import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Injectable()
export class TableService {

  dummyData: SelectItem[];

  constructor() { }

  public getExperts(){
    this.loadDummyData()
    let hi = 'hi';
    return hi;
  }

  private loadDummyData(){

  }
}
