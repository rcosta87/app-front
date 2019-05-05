import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/auth/login.service';
import { User } from 'app/auth/login/user.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'mt-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {


  constructor(private loginService: LoginService) {}

  ngOnInit() {

  }

  getUser():User{
    return JSON.parse(localStorage.getItem("current_user"))
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
