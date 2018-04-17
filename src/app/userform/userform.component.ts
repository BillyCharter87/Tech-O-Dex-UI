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
      FirstName : new FormControl(''),
      LastName : new FormControl('')
    })
  }

  public onSubmit(value: any) {

    this.userFormService.submitUserForm(value);
    this.submitted = true;
  }
}


// import { Component } from '@angular/core';
// import {Http, Response, Headers} from '@angular/http';
// import {stringDistance} from "codelyzer/util/utils";
//
// @Component({
//   selector: 'app-userform',
//   templateUrl: './userform.component.html',
//   styleUrls: ['./userform.component.css'],
// })
// export class UserformComponent{
//
//   constructor(private http:Http ) {}
//   fName ='';
//   lName ='';
//
//   returnedName ='';
//
//   public onSubmit() {
//
//     // const url = 'http://localhost:8080/greeting/?name=' + this.name;
//     const url = 'http://localhost:8080/greeting'
//
//
//     let f : string = '';
//     let l : string = '';
//
//     let data = {
//       f = this.fName,
//       l = this.lName
//     }
//
//
//     const headers = new Headers();
//     headers.append('Content-Type','application/json; charset=utf=8');
//
//     this.http.post(url, data, headers)
//       .subscribe(
//         (res: Response) => {
//           const nameResp = res.json();
//           this.returnedName = nameResp.name;
//         }
//       )
//   }
// }
