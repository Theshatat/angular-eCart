import { Component, Input, OnChanges, Output,EventEmitter } from '@angular/core';
import { IProduct } from '../../app/Models/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RoundedShadow} from '../../app/Directives/rounded-shadow';
import {NationalIdTransformPipe} from '../../app/Pipes/NationalIdTransform/national-id-transform-pipe';
import {CreditCardTransformPipe} from '../../app/Pipes/CreditCardTransform/credit-card-transform-pipe';
import { ProductsService } from '../../app/Services/products-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule,RoundedShadow,NationalIdTransformPipe,CreditCardTransformPipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnChanges {
  myProducts:IProduct[];
  filteredProducts:IProduct[];
  totalOrderPrice:number =0;

  nationalId:string ="29905191501812";
  CreditCard:string = "1234567891234567"
  name:string = "";
  price:number = 0;
  product! :IProduct

  @Input() receivedCatId:number=0;

  // define an event emitter to send the selected product to the parent component (order)
  @Output() OnsendProduct:EventEmitter<IProduct>


  constructor(private _productsService:ProductsService, private _routerService : Router) {

    this.myProducts = this._productsService.getAllProducts();
    this.filteredProducts = this.myProducts;
    // initialize the event emitter
    this.OnsendProduct = new EventEmitter<IProduct>();
  }
  ngOnChanges() {
    this.filterProducts();
  };

  // buy(count:string,price:number) {
  //   this.totalOrderPrice +=Number(count) * price;
  // }
  buy(product:IProduct) {
    if(product.quantity>0){
      product.quantity--;
    }
    this.OnsendProduct.emit(product);
  }
  filterProducts(){
    if(this.receivedCatId==0){
      this.filteredProducts = this.myProducts;
    } else {
      this.filteredProducts = this.myProducts.filter((p)=>Number(p.catId)== Number(this.receivedCatId));
    }
  }
  getType(x:any){
  return typeof x;
}
navigateByUrl(id:number){
  this._routerService.navigate(['/Products',id]);
  // this._routerService.navigateByUrl('/Products/'+id);
}
}
