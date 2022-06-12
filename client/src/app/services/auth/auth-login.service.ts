import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, public router: Router) { }

//   readonly API_URL = 'http://localhost:3000';

  createTokenAuth(res: any): void {
    console.log(res);
    if (res['access_token']) {
      localStorage.setItem('token', res['access_token']); //token here is stored in a local storage
      let decode_obj = this.getDecodedAccessToken(localStorage.getItem('token')!);
      this.router.navigateByUrl('/dashboard');
    }
  }

//   getPathAuth() {
//     this.http.get(this.API_URL + '/auth/g') //path1 is then requested    
//       .subscribe(
//         (res) => {
//           console.log(res);
//         },
//         (err) => {
//           console.log(err);
//           this.router.navigateByUrl('/login');
//         }
//       );       
//   }

  getDecodedAccessToken(token: string): any {
    try{
      // console.log(token);
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

}