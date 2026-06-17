import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private isBrowser: boolean;

  private isAuthenticated = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticated.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      const loggedIn =
        localStorage.getItem('isAuthenticated') === 'true';

      this.isAuthenticated.next(loggedIn);
    }
  }

  login() {
    if (this.isBrowser) {
      localStorage.setItem('token', 'fake-token-123');
      localStorage.setItem('isAuthenticated', 'true');
    }
    this.isAuthenticated.next(true);
  }

  logout() {
    if (this.isBrowser) {
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('token');
    }
    this.isAuthenticated.next(false);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated.value;
  }
}
 // دة صح لكن هنستخدم الطريقة دي عشان نتجنب مشاكل ال SSR
//  لان في ال SSR مفيش localStorage وده هيعمل error لو حاولنا نستخدمه في ال constructor
// لما نستخدم isPlatformBrowser بنقدر نتحقق اذا كنا في بيئة المتصفح ولا لا قبل ما نحاول نستخدم localStorage
// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {

//   private isAuthenticated = new BehaviorSubject<boolean>(
//     localStorage.getItem('isAuthenticated') === 'true'
//   );
// constructor() {
// }
//   isAuthenticated$ =
//     this.isAuthenticated.asObservable();

//   login() {
//     localStorage.setItem('isAuthenticated', 'true');
//     this.isAuthenticated.next(true);
//   }

//   logout() {
//     localStorage.removeItem('isAuthenticated');
//     this.isAuthenticated.next(false);
//   }
//   isLoggedIn(): boolean {
//     return localStorage.getItem('isAuthenticated') === 'true';
//   }
// }
