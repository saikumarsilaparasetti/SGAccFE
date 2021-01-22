import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss']
})
export class LogOutComponent implements OnInit {

  @Input()  login: boolean;
  
  constructor() { }

  ngOnInit(): void {
    this.login= false;
  }

}
