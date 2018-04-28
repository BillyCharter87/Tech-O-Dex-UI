import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
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

  constructor(private userFormService: UserformService) {}

  ngOnInit() {
    this.userForm = new FormGroup({
      firstName : new FormControl(''),
      lastName : new FormControl(''),
      eId : new FormControl(''),
      tech : new FormControl('')
    })
  }

  public onRegister(value: any) {

    this.userFormService.submitUserForm(value)
      .subscribe(
        value => {
          console.log('[POST] create Registrants successfully', value);
        }, error => {
          console.log('FAIL to create Registrants!');
        },
        () => {
          console.log('POST Registrants - now completed.');
        });
    this.submitted = true;
  }
}
