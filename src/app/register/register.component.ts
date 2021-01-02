import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import {Customer} from '../shared/customer'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
user:Customer={
  name:"",
  s_o:"",
  address:"",
  contact:null,
  balance:0.0
};
invalid:boolean=false;
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }

  cancel():void{
    this.router.navigate(['/home']);
  }

  onSubmit(){
      console.log(this.user);
      //this.http.post('http://localhost:3000/registerCustomer',this.user).subscribe(
        this.http.post('http://sgacc-backend.herokuapp.com/registerCustomer',this.user).subscribe(
        res=>{
          console.log(res);
        },
        error=>{
          console.log('error',error);
        }
      );
      this.router.navigate(['/home']);
  }

}
