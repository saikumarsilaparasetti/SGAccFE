import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})



export class HeaderComponent implements OnInit {
  visible:boolean=true;

  public loggedIn:string='false';
  public static is_loggedIn:boolean=false;
  login_:boolean=false;
  constructor(private router:Router,private authService:AuthService) { }

  logout():void{
    this.authService.logout();
    this.ngOnInit();
  }
 public activate():void{
   this.visible=false;
    this.loggedIn=localStorage.getItem('isLoggedIn');
    if(this.loggedIn==='true'){
      HeaderComponent.is_loggedIn=true;
      this.login_=true;
    }
    else{
      this.login_=false;
      HeaderComponent.is_loggedIn=false;}

  }
  ngOnInit(): void {
    this.visible=false;
    this.loggedIn=localStorage.getItem('isLoggedIn');
    if(this.loggedIn==='true'){
      HeaderComponent.is_loggedIn=true;
      this.login_=true;
    }
    else{
      this.login_=false;
      HeaderComponent.is_loggedIn=false;}
    
  }
}
