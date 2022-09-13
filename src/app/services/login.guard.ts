import {  CanActivate,  ActivatedRouteSnapshot,  RouterStateSnapshot,  Router} from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";


@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private authservice: AuthService, private router: Router,) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let logged = this.authservice.isAuthenticated();

    if (logged) {
      return true;
     
    }
    this.router.navigate(['/movie']);
    alert("Sayfaya erişim için sisteme giriş yapmalısınız!");
    return false;
  }
}