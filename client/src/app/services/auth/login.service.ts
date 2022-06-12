import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { NavigationError, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(protected http: HttpClient) { }

  PostLoginValue(username: string, password: string): Observable<any> {
    //   const url = environment.SERVER_URL + '/auth/login';
      const url = 'http://localhost:3000/auth/login'
      const body = {username: username, password: password};
      return this.http.post(url, body);
  }

  PostRegisterValue(user: User): Observable<any> {
    //   const url = environment.SERVER_URL + '/auth/login';
      const url = 'http://localhost:3000/auth/create'
      const body = {user: user};
      return this.http.post(url, body);
  }

  getAllUsers() : Observable<any> {
    const url = 'http://localhost:3000/auth/'
    return this.http.get(url);
  }
  getUserById(id: string): Observable<any> {
    const url = 'http://localhost:3000/auth/' + id;
    return this.http.get(url);
  }
}