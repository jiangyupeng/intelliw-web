// import {Injectable} from '@angular/core';
// import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
//
// @Injectable
// export class AuthGuardService implements CanActivate {
//   constructor(private router: Router) {
//   }
//
//   canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//     if (sessionStorage.getItem('auth_token') !== null) {
//       return true;
//     }
//
//     let url: string = state.url;
//     sessionStorage.setItem('redirectUrl', url);
//     this.router.navigate(['/auth/login']);
//     return false;
//   }
// }
