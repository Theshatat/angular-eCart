import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private isAuthenticated = new BehaviorSubject<boolean>(false);
constructor() {
  // Check localStorage for authentication status on service initialization
  //  and update the BehaviorSubject accordingly.
  if (typeof window !== 'undefined') {
    // Check if the user is logged in by looking for a specific key in localStorage
    const isLoggedIn =
      localStorage.getItem('isAuthenticated') === 'true';

    this.isAuthenticated.next(isLoggedIn);
  }

}
  isAuthenticated$ =
    this.isAuthenticated.asObservable();

  login() {
    localStorage.setItem('isAuthenticated', 'true');
    this.isAuthenticated.next(true);
  }

  logout() {
    localStorage.removeItem('isAuthenticated');
    this.isAuthenticated.next(false);
  }
}
