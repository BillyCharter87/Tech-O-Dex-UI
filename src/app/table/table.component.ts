import { TableService} from './table.service';
import { OnInit, Component} from "@angular/core";
import { Tech} from "./tech.interface";
import { FormGroup, FormControl } from '@angular/forms'


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [TableService]
})
export class TableComponent implements OnInit {

  tech: Tech[];
  techForm: FormGroup;
  private submitted;

  constructor(private tableService: TableService) {}

  ngOnInit() {
    this.techForm = new FormGroup({
      technology : new FormControl('')
    })
  }

  public onFindAll(value: any) {

    this.tableService.getAllTechs(value)
  .subscribe(
      value => {
        console.log('[POST] create Customer successfully', value);
      }, error => {
        console.log('FAIL to create Customer!');
      },
      () => {
        console.log('POST Customer - now completed.');
      });
    this.submitted = true;
  }
}
