import { Component } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { AuthService } from '../../app/Services/auth-service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [AsyncPipe, NgIf],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  isAuthenticated$: Observable<boolean>;
  constructor(private _authService: AuthService, private router: Router) {
    this.isAuthenticated$ = this._authService.isAuthenticated$;
  }
  login() {
    this._authService.login();
    this.router.navigate(['/Products'])
  }
}
