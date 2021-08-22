import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoutingGuard implements CanActivate {

  constructor(private userService: AuthService ,  private router: Router,) {};

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (this.userService.isLogedin()) {
        return true;
      } else {
        window.alert("You don't have permission to view this page");
        this.router.navigateByUrl('/login')
        return false;
      }
  }

}
