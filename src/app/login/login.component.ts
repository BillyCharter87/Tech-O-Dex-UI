import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from "@angular/forms";
import { LoginService } from './login.service';
import { User } from './user.interface';
import { Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  private submitted;

  constructor(private loginService: LoginService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      eID : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required),
    })
  }

  public onLogin(value: any) {


    if(value.eId == 'admin' && value.password == 'admin'){
      this.router.navigateByUrl('/dashboard')
    }


    // this.loginService.onLogin(value)
    //   .subscribe(
    //     value => {
    //       console.log('[POST] login Registrant successfully', value);
    //     }, error => {
    //       console.log('FAIL to login Registrant!');
    //     },
    //     () => {
    //       console.log('POST Registrants - now completed.');
    //     });
    this.submitted = true;
  }
}
