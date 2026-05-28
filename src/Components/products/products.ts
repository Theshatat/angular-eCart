import { Component } from '@angular/core';
import { IProduct } from '../../app/Models/iproduct';
import { CommonModule } from '@angular/common';
import { ICategory } from '../../app/Models/icategory';
import { FormsModule } from '@angular/forms';
import {RoundedShadow} from '../../app/Directives/rounded-shadow';
import {NationalIdTransformPipe} from '../../app/Pipes/NationalIdTransform/national-id-transform-pipe';
import {CreditCardTransformPipe} from '../../app/Pipes/CreditCardTransform/credit-card-transform-pipe';


@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule,RoundedShadow,NationalIdTransformPipe,CreditCardTransformPipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  myProducts:IProduct[];
  categories:ICategory[];
  totalOrderPrice:number =0;
  selectedCatId:number=0;

  nationalId:string ="29905191501812";
  CreditCard:string = "1234567891234567"

  constructor(){
    this.myProducts = [

        {id:1,name:"Laptop HP",imageUrl:"https://picsum.photos/200/300",price:20000,quantity:3,catId:10},
        {id:2,name:"Laptop Lenovo",imageUrl:"https://picsum.photos/200",price:15000,quantity:0,catId:10},
        {id:3,name:"Tablet Samsung",imageUrl:"https://picsum.photos/200/300?grayscale",price:10000,quantity:1,catId:20},
        {id:4,name:"Tablet HP",imageUrl:"https://picsum.photos/200/300/?blur",price:5000,quantity:2,catId:20},
        {id:5,name:"Oppo A3",imageUrl:"https://placehold.co/600x400",price:13000,quantity:0,catId:30},
        {id:6,name:"Iphone 16",imageUrl:"https://placehold.co/600x400/png",price:50000,quantity:5,catId:30}
      ]

      this.categories=[
        {id:1,name:"Laptop"},
        {id:2,name:"Tablet"},
        {id:3,name:"Mobile"}
      ]
  }
  // buy(count:string,price:number) {
  //   this.totalOrderPrice +=Number(count) * price;
  // }
  buy(product:IProduct) {
    if(product.quantity>0){
      product.quantity--;
    }
  }
}
