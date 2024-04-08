/* import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private loggedIn = new BehaviorSubject<boolean>(false);
  authStatus = this.loggedIn.asObservable();

  constructor() {}

  isLoggedIn(): boolean {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('isUserLoggedIn') === 'true';
      }
    return false;
  }

  login() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('isUserLoggedIn', 'true');
      this.loggedIn.next(true);
    }
    return false;
  }


  logout() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('isUserLoggedIn', 'false');
      this.loggedIn.next(false);
    }
    return false;
  }
} */

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  authStatus = this.loggedIn.asObservable();

  constructor() {}

  isLoggedIn(): boolean {
    return localStorage.getItem('isUserLoggedIn') === 'true';
  }

  login() {
    localStorage.setItem('isUserLoggedIn', 'true');
    this.loggedIn.next(true);
  }

  logout() {
    localStorage.setItem('isUserLoggedIn', 'false');
    this.loggedIn.next(false);
  }
}


/* import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { REQUEST } from '@nguniversal/express-engine/tokens';

@Injectable()
export class AuthService {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(REQUEST) private request: any
  ) {}

  isLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      // In the browser, use localStorage
      return !!localStorage.getItem('token');
    } else {
      // On the server, use cookies
      return !!this.request.cookies['token'];
    }
  }
} */