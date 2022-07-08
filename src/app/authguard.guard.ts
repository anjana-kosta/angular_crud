import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(private _authService:AuthServiceService,
    private _router:Router){ }
    
  canActivate(){
    if(this._authService.isLoggedin()){
      return true;
    }else{
      // this._router.navigate(['/login'])
      return false;
    }
  }
  
}
