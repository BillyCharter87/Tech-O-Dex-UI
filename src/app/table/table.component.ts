import { TableService} from './table.service';
import { OnInit, Component} from '@angular/core';
import { Tech} from './tech.interface';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

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

  constructor(private tableService: TableService, private fb: FormBuilder) {}

  ngOnInit() {
    this.techForm = this.fb.group({
      technology : new FormControl('',Validators.required)
    })
  }

  public onFindAll(value: any) {
    this.tableService.getAllTechs(value).then(tech => this.tech = tech);
    this.submitted = true;
  }

  public onDelete(value: any) {
    console.log(value)
    this.tableService.deleteRegistrant(value)
  .subscribe(
      value => {
        console.log('[POST] create Registrant successfully', value);
      }, error => {
        console.log('FAIL to create Registrants!');
      },
      () => {
        console.log('POST Registrants - now completed.');
      });
    this.submitted = true;
  }
}
