import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { map } from 'rxjs/operators';
import { Admin } from '../shared/admin'
import {HeaderComponent} from '../header/header.component';
import { AuthService } from '../services/auth.service';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<boolean>();

  okay:boolean=true;
  user:Admin = { username: "", password: "" };
  //Admin = { username: "", password: "" };
  //res: boolean=false;
  inValid:boolean=false;
  constructor(private http: HttpClient, private router: Router,private auth:AuthService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.okay=false;
    //this.res=false;
    //this.user.username=
    //alert('clicked')
    //this.http.post<boolean>('http://localhost:3000/login/', this.user ).subscribe(
      this.http.post<boolean>('https://sgacc-backend.herokuapp.com/login', this.user ).subscribe(
      res => {this.okay=true;
      if(res==true){
        this.inValid=false;
        localStorage.setItem('isLoggedIn','true');
        localStorage.setItem('token',this.user['username']);
        //this.header.ngOnInit();
        HeaderComponent.is_loggedIn=true;
        this.newItemEvent.emit(true);
        this.router.navigate(['/home']);
      }
      else{
        this.inValid=true;
      }
      },
      error => {
        console.log("error", error);
      }
    );
  }

}
