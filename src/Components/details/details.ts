import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { ProductsService } from '../../app/Services/products-service';
import { IProduct } from '../../app/Models/iproduct';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CurrencyPipe],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit{
  currentId:number=0;
  product: IProduct|null=null;
  constructor(private _activatedRoute: ActivatedRoute, private _productService: ProductsService) {

  }
  ngOnInit(){
    this.currentId = Number(this._activatedRoute.snapshot.paramMap.get('id'));
    this.product = this._productService.getProductById(this.currentId);
  }
}
