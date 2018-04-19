import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Http, Headers, Response } from '@angular/http';
import { Subscription } from 'rxjs/Rx';
import { UserformService } from './userform.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css'],
  providers: [UserformService]
})
export class UserformComponent implements OnInit {

  userForm: FormGroup;
  private submitted;
  returnedName ='';

  constructor(private http:Http, private userFormService: UserformService) {}

  ngOnInit() {
    this.userForm = new FormGroup({
      firstName : new FormControl(''),
      lastName : new FormControl('')
    })
  }

  public onSubmit(value: any) {

    this.userFormService.submitUserForm(value)
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
