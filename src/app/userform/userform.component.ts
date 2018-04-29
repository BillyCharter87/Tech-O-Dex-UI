import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms'
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
  constructor(private userFormService: UserformService, private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      firstName : new FormControl('',Validators.required),
      lastName : new FormControl('',Validators.required),
      eId : new FormControl('',Validators.required),
      tech : new FormControl('',Validators.required)
    })
  }

  public onRegister(value: any) {

    this.userFormService.submitUserForm(value)
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
