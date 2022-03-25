import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { getAuth, onAuthStateChanged  } from "firebase/auth";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return new Promise(
            (resolve, reject) => {
                const auth = getAuth();
                onAuthStateChanged(auth,
                  (user) => {
                    if (user) {
                      resolve(true);
                    } else {
                      this.router.navigate(["/auth/signin"]);
                      resolve(false);
                    }
                  }
                )
            }
        )
    }
}