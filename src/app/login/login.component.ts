import { Component, OnInit } from '@angular/core';
import {Validators, FormControl, FormGroup, FormBuilder} from "@angular/forms";
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  private submitted;

  constructor(private loginService: LoginService, private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      eID : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required),
    })
  }

  public onLogin(value: any) {

    this.loginService.onLogin(value)
      .subscribe(
        value => {
          console.log('[POST] login Registrant successfully', value);
        }, error => {
          console.log('FAIL to login Registrant!');
        },
        () => {
          console.log('POST Registrants - now completed.');
        });
    this.submitted = true;
  }
}
