import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
//import { Observable } from 'rxjs';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }


  canActivate() {
    if (BackendService.isLogged()) {
      return true;
    }
    else{
      this.router.navigate(["/login"]);
      return false;
    }
  }

}
