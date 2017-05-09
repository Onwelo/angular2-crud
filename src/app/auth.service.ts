import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isLoggedIn = false;
  private myPermissions: string[] = [];

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(usr, pass): Observable<boolean> {
    this.myPermissions = ['samurai', 'ninja', 'ronin'];
    if (usr === 'admin' && pass === '1234') {
      return Observable.of(true).delay(500).do(val => this.isLoggedIn = true);
    }
    else {
      return Observable.of(true).delay(500).do(val => this.isLoggedIn = false);
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  getPermissions(): string[] {
    return this.myPermissions;
  }

  setPermissions(newPermission: string): void {
    if (this.myPermissions.indexOf(newPermission) === -1 ) { this.myPermissions.push(newPermission); }
  }
}
