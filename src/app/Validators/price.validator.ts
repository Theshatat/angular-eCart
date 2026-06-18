// import { Component } from '@angular/core';
import { 
  AbstractControl, ValidationErrors
 } from '@angular/forms';

export function PriceValidator(control: AbstractControl): ValidationErrors | null {
    const price = control.value;
    if (price && price < 5) {
      // priceInvalid is the error key that will be used to identify this validation error in html
      // @if(f['price'].errors?.['priceInvalid']) بالشكل دة
      return { priceInvalid: true }; 
    }
    return null;
  }