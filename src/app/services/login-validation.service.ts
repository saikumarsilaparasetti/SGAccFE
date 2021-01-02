import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginValidationService {
  valid:boolean;
  constructor(private http:HttpClient) { }

  validate():Observable<boolean>{
    //return this.http.get<boolean>('http://localhost:3000/login');
    return this.http.get<boolean>('http://sgacc-backend.herokuapp.com/login');

    
  }
}
