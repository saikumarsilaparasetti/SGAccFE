import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public loggedIn:string='false';
  public is_loggedIn:boolean=false;
  constructor(private router:Router,private authService:AuthService) { }

  logout():void{
    this.authService.logout();
    this.ngOnInit();
  }
 public activate():void{
    this.loggedIn=localStorage.getItem('isLoggedIn');
    if(this.loggedIn==='true'){
      this.is_loggedIn=true;}
    else{
    this.is_loggedIn=false;}

  }
  ngOnInit(): void {
    this.loggedIn=localStorage.getItem('isLoggedIn');
    if(this.loggedIn==='true')
      this.is_loggedIn=true;
    else
      this.is_loggedIn=false;

  }
}
