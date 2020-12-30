import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  logout():void{
    localStorage.setItem('isLoggedIn','false');
    localStorage.removeItem('token');
    this.router.navigate(['/index']);
    //this.ngOnInit();
  }
}
