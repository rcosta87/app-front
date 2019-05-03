import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/auth/login.service';
import { User } from 'app/auth/login/user.model';

@Component({
  selector: 'mt-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {


  constructor(private loginService: LoginService) {}

  ngOnInit() {

  }

  user(): User{
    return this.loginService.getCurrentUser()
  }

  isLoggedIn(): boolean{
    return this.loginService.isLoggedIn()
  }

  login(){
    this.loginService.handleLogin()
  }

  logout(){
    this.loginService.logOut()
  }


}
