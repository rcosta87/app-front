import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent ,  HttpErrorResponse } from "@angular/common/http";
import { Observable, empty} from "rxjs";
import { Injectable, Injector } from "@angular/core";
import { LoginService } from "./login.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(private injector: Injector){}

  intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>>{

      const loginService = this.injector.get(LoginService)
      const token = loginService.getToken()
      if(loginService.isLoggedIn()){
        const authRequest  = request.clone({setHeaders: {'Authorization' : `Bearer ${token}`} })
        return next.handle(authRequest)
      } else{
        return next.handle(request)
      }

  }



}
