import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // create a BehaviorSubject to hold the current count of items in the cart 
  // and initialize it to 0
  private cartCountSubject =
    new BehaviorSubject<number>(0);

  // create an observable from the BehaviorSubject to allow other components
  //  to subscribe to changes in the cart count.
  cartCount$ = this.cartCountSubject.asObservable();
  constructor() {
    
  }
  // create methods to add and remove items from the cart,
  //  which will update the cart count accordingly.
  addToCart() {
    const currentCount = this.cartCountSubject.value;
    this.cartCountSubject.next(currentCount + 1);
  }
  removeFromCart() {
    const currentCount = this.cartCountSubject.value;
    if(currentCount>0){
      this.cartCountSubject.next(currentCount - 1);
    }
  }
}
