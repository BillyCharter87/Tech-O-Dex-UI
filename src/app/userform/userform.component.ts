// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms'
// import { Http } from '@angular/http';
//
// @Component({
//   selector: 'app-userform',
//   templateUrl: './userform.component.html',
//   styleUrls: ['./userform.component.css'],
// })
// export class UserformComponent implements OnInit {
//
//   userForm: FormGroup;
//   private submitted;
//   constructor(private http:Http ) {}
//
//   ngOnInit() {
//     this.userForm = new FormGroup({
//       FirstName : new FormControl('')
//     })
//   }
//
//   public onSubmit(FirstName: any) {
//
//     console.log(FirstName)
//     // let name = FirstName.target.elements[0].value;
//     const url = 'http://localhost:8080/greeting/?name=' + FirstName;
//
//     const headers = new Headers();
//     headers.append('Content-Type','application/json; charset=utf=8');
//
//     this.http.post(url,"HI", headers)
//       .subscribe(
//         () => {},
//         err => console.log(err)
//       )
//     console.log(this.userForm.value)
//     this.submitted = true;
//   }
// }


import { Component } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css'],
})
export class UserformComponent{

  constructor(private http:Http ) {}
  name ='';
  returnedName ='';

  public onSubmit() {

    const url = 'http://localhost:8080/greeting/?name=' + this.name;

    const headers = new Headers();
    headers.append('Content-Type','application/json; charset=utf=8');

    this.http.post(url, headers)
      .subscribe(
        (res: Response) => {
          const nameResp = res.json();
          this.returnedName = nameResp.name;
        }
      )
  }
}
