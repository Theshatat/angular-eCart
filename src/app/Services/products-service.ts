import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  myProducts: IProduct[];
  constructor() {
    this.myProducts = [

        {id:1,name:"Laptop HP",imageUrl:"https://picsum.photos/200/300",price:20000,quantity:3,catId:1},
        {id:2,name:"Laptop Lenovo",imageUrl:"https://picsum.photos/200",price:15000,quantity:0,catId:1},
        {id:3,name:"Tablet Samsung",imageUrl:"https://picsum.photos/200/300?grayscale",price:10000,quantity:1,catId:2},
        {id:4,name:"Tablet HP",imageUrl:"https://picsum.photos/200/300/?blur",price:5000,quantity:2,catId:2},
        {id:5,name:"Oppo A3",imageUrl:"https://placehold.co/600x400",price:13000,quantity:0,catId:3},
        {id:6,name:"Iphone 16",imageUrl:"https://placehold.co/600x400/png",price:50000,quantity:5,catId:3}
      ]
  }
  getAllProducts(): IProduct[] {
    return this.myProducts;
  }
  getProductsByCatId(catId:number): IProduct[] {
    return this.myProducts.filter((p)=>Number(p.catId)== Number(catId));
  }
  getProductById(id:number): IProduct | null {
    return this.myProducts.find((p)=>Number(p.id)== Number(id)) || null;
  }
  mapIdsToArray(){
    return this.myProducts.map((ele) => ele.id)
  }
}
