import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../../app/Models/icategory';
import { Products } from '../../products/products';
import { IProduct } from '../../../app/Models/iproduct';

@Component({
  selector: 'app-order',
  imports: [CommonModule, FormsModule, Products],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order {
  categories:ICategory[];
  selectedCatId:number=0;
  name:string="";
  price:number=0;
  constructor() {

    this.categories=[
        {id:1,name:"Laptop"},
        {id:2,name:"Tablet"},
        {id:3,name:"Mobile"}
      ]
  }
  onProductSelected(product:IProduct){
    this.name = product.name;
    this.price = product.price;
  }
}
