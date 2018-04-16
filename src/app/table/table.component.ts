import { Component, OnInit } from '@angular/core';
import { TableService } from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [TableService]
})
export class TableComponent implements OnInit {

  constructor(private tableService: TableService ) { }

  ngOnInit() {
      this.tableService.getExperts();
  }

}
