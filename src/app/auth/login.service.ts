import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap, filter } from 'rxjs/operators'
import { BOOK_API } from '../app.api';
import { User } from './user.model'


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  lastUrl: string

  constructor(private http: HttpClient,
              private route: Router) {
    this.route.events
    .pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e : NavigationEnd) => this.lastUrl = e.url)
  }

  private setSesstion(authResult){
    localStorage.setItem("id_token", authResult.acessToken);
    localStorage.setItem("current_user", JSON.stringify(authResult))
  }

  getToken():string{
    return localStorage.getItem('id_token')
  }

  login(username: string, password:string) : Observable<User>{
    return this.http.post<User>(`${BOOK_API}/login`, {userName: username, password: password})
        .pipe(
            tap( response => this.setSesstion(response))
          )
  }

  logOut(){
    localStorage.removeItem("id_token");
    localStorage.removeItem("current_user")
    window.location.reload()
  }

  isLoggedIn(){
    return localStorage.getItem("id_token") !== null
  }

  isLoggedOut() {
    return !this.isLoggedIn
  }

  getCurrentUser(){
    return JSON.parse(localStorage.getItem("current_user"));
  }

  handleLogin(path: string = this.lastUrl){
    this.route.navigate(['/login', btoa(path)])
  }
}
