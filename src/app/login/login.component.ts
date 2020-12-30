import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { map } from 'rxjs/operators';
import { Admin } from '../shared/admin'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:Admin = { username: "", password: "" };
  //Admin = { username: "", password: "" };
  res: boolean=false;
  val:boolean=true;
  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.res=false;
    //this.user.username=
    //alert('clicked')
    this.http.post<boolean>('http://localhost:3000/login/', this.user ).subscribe(
      res => {
      if(res)
        this.router.navigate(['/home']);
      else
        this.res=true;
      },
      error => {
        console.log("error", error);
      }
    );
  }

}
