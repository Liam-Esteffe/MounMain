import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth/auth-login.service';
import { LoginService } from 'src/app/services/auth/login.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private readonly authUtils: AuthService, private readonly authService : LoginService, private readonly utils: UtilsService) { }

  public usersLenght: number = 0;

  public LoginAuth = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  public RegisterAuth = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required)
  });

  public state: 'login' | 'register' = 'login'

  public sendData() {
    this.state == 'register' ? this.createNewUser() : this.loginUser();
  }

  public getUsersLenght() {
    this.authService.getAllUsers().subscribe((result :any) => {
      for (let i in result) {
        this.usersLenght += 1;
      }
    })
  }

  private createNewUser() {
    const nUser: User = {
      firstname: this.RegisterAuth.value.firstname,
      lastname: this.RegisterAuth.value.lastname,
      username: this.RegisterAuth.value.username,
      email: this.RegisterAuth.value.email,
      password: this.RegisterAuth.value.password,
      _id: this.usersLenght.toString()
    }
    this.authService.PostRegisterValue(nUser).subscribe((response : any) => {

    })
  }

  private loginUser() {
    this.authService.PostLoginValue(this.LoginAuth.value.username, this.LoginAuth.value.password)
    .subscribe((response : any) => {
  
      window.localStorage.setItem('token', response);
      window.localStorage.setItem('user', this.authUtils.getDecodedAccessToken(response.access_token).username);
      window.localStorage.setItem('firstname', this.authUtils.getDecodedAccessToken(response.access_token).firstname);
      window.localStorage.setItem('lastname', this.authUtils.getDecodedAccessToken(response.access_token).lastname);

      console.log(this.authUtils.getDecodedAccessToken(response.access_token));
      this.utils.validRequest('Good job, you are connected ! ')

      this.utils.routerComponents('/home');
    
    }, (err) => {
      this.utils.errorRequest('Bad Credentials check your informations')
    })
    // login user
  }

  private getUserById(id: string) {
    console.log(id);
    
    this.authService.getUserById(id)
    .subscribe((response: any) => {
      console.log(response);
    })
  }

  

  public changeState() {
    this.state == 'login' ? this.state = 'register' : this.state = 'login'
  }

  ngOnInit(): void {
    this.getUsersLenght();
  }

}
