import { Component } from '@angular/core';
import { ProductsService } from '../../app/Services/products-service';
import { Router, ActivatedRoute } from '@angular/router';
  import {  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-product.html',
  styleUrl: './edit-product.css',
})
export class EditProduct {
  currentId:number = 0;
  constructor(private _productService: ProductsService,
    private _router: Router,
    private _activatedRoute:ActivatedRoute) {
      
  }
  ProductForm = new FormGroup({

  name:new FormControl(
    '',
    [
      Validators.required,
      Validators.minLength(3)
    ]
  ),

  price:new FormControl(
    0,
    [
      Validators.required,
      Validators.min(1)
    ]
  ),

  quantity:new FormControl(
    0,
    [
      Validators.required,
      Validators.min(1)
    ]
  ),

  imageUrl:new FormControl(
    '',
    Validators.required
  ),

  catId:new FormControl(
    0,
    [
      Validators.required,
      Validators.min(1)
    ]
  )

});
  ngOnInit() {
    this.currentId = Number(this._activatedRoute.snapshot.paramMap.get('id'));

      this._productService.getProductById(this.currentId).subscribe({
        next:(data)=>{this.ProductForm.patchValue({

            name:data.name,
            price:data.price,
            quantity:data.quantity,
            imageUrl:data.imageUrl,
            catId:data.catId
          });

          }
        })
  }
  OnSubmit(){
    if(this.ProductForm.invalid)
        return;
      this._productService.updateProduct(this.currentId,this.ProductForm.value as any).subscribe({
        next:(res)=>{
          this._router.navigate(['/Products']);
        },
        error:(err)=>{
          console.log(err);
        }
      });
  }
}
