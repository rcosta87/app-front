import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable, pipe } from "rxjs";
import { Injectable, Injector } from "@angular/core";
import { LoginService } from "./login.service";
import { tap } from 'rxjs/operators'

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(private injector: Injector){}

  intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>>{

    const loginService = this.injector.get(LoginService)

    if(loginService.isLoggedIn()){
      const token = loginService.getToken()
      const authRequest  = request.clone({setHeaders: {'Authorization' : `Bearer ${token}`} })
      return next.handle(authRequest)
    } else{
      return next.handle(request)
    }
  }
}
