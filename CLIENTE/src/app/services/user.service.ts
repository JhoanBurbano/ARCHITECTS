import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url="http://localhost:4000/"

  constructor(private http: HttpClient) { }

  signupUser(user: Usuario):Observable<any>{
    return this.http.post(`${this.url}singup`, user)
  }

}
