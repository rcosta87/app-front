import { CanLoad, Route, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router} from "@angular/router";
import { Injectable } from "@angular/core";
import { LoginService } from "./login.service";

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate{

  constructor(private loginService: LoginService){}

  checkAthentication(path: string){
    const token = this.loginService.getToken()
    if(!token) {
      this.loginService.handleLogin(`/${path}`)
      return false;
    }
    return true
  }

  canLoad(route: Route) : boolean{
    return this.checkAthentication(route.path)
  }

  canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean{
    return this.checkAthentication(routerState.url)
  }

}
