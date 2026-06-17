import { Component } from '@angular/core';
import {  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators } from '@angular/forms';
import { ProductsService } from '../../app/Services/Product-Service/products-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  constructor(private _productsService: ProductsService, private _router: Router) {}
  ProductForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl(0, [Validators.required, Validators.min(1)]),
    quantity: new FormControl(0, [Validators.required, Validators.min(1)]),
    imageUrl: new FormControl('', [Validators.required]),
    catId: new FormControl(0, [Validators.required, Validators.min(1)]),
  })
  onSubmit(){

  if(this.ProductForm.invalid)
      return;

  this._productsService
      .addProduct(this.ProductForm.value as any)
      .subscribe({

        next:(res)=>{
          this._router.navigate(['/Products']);
        },

        error:(err)=>{
          console.log(err);
        }

      });

}
}
