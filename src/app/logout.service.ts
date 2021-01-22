import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  logoutEmitter=new EventEmitter();
  variable:Subscription;

  constructor() { }

  onActivate(){
    this.logoutEmitter.emit("true");
  }

}
