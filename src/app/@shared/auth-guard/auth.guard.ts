import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin(state.url);
  }

  checkLogin(url: string): boolean {
    var currentUser;
    // const currentUser: any = JSON.parse(localStorage.getItem);
    if (currentUser) {
      return true;
    }

    // Navigate to the login page with extras
    this.router.navigate(['/login'], { queryParams: { returnUrl: url } });
    return false;
  }
}