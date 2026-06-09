import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../app/Services/cart-service';
import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { AuthService } from '../../app/Services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, AsyncPipe, NgIf],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  cartCount$: Observable<number>;
  isAuthenticated$: Observable<boolean>;
  constructor(private _cartService: CartService, private _authService: AuthService, private router: Router) {
    this.cartCount$ = this._cartService.cartCount$;
    this.isAuthenticated$ = this._authService.isAuthenticated$;
  }
  login() {
    this._authService.login();
  }
  logout() {
    this._authService.logout(); 
    this.router.navigate(['/Login']);
  }
}
