import { Component } from '@angular/core';
import {
  FormGroup,
  FormArray,
  FormControl,
  FormBuilder,
  ReactiveFormsModule,
  Validators
 } from '@angular/forms';
import { ProductsService } from '../../app/Services/Product-Service/products-service';
import { Router } from '@angular/router';
import { PriceValidator } from '../../app/Validators/price.validator';
@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  ProductForm!: FormGroup;
  constructor(private _productsService: ProductsService, private _router: Router,private fb: FormBuilder) {}
    ngOnInit() {
    this.ProductForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, PriceValidator]],
      quantity: [0, [Validators.required, Validators.min(1)]],
      imageUrl: ['', [Validators.required]],
      catId: [0, [Validators.required, Validators.min(1)]],
      phones: this.fb.array([]),
      address: this.fb.group({
        city: [''],
        street: ['']
      })
    });
  }
  get f() {
    return this.ProductForm.controls;
  }
  // the coming 3 functions for Form Control.
  get phones() {
    return this.ProductForm.get('phones') as FormArray;
  }
  addPhone() {
    this.phones.push(new FormControl(''));
  }
  removePhone(index: number) {
    this.phones.removeAt(index);
  }
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
