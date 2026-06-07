import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { ProductsService } from '../../app/Services/products-service';
import { IProduct } from '../../app/Models/iproduct';
import { CurrencyPipe, Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [CurrencyPipe],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit{
  currentId:number=0;
  product: IProduct|null=null;
  currentIdIndex:number=0;
  idsArr:number[] = [];
  constructor(private _activatedRoute: ActivatedRoute,
     private _productService: ProductsService,
    private _router: Router,
    private _location: Location
  ) {

  }
  
  ngOnInit() {
  this._activatedRoute.paramMap.subscribe(params => {
    this.currentId = Number(params.get('id'));
    this.product = this._productService.getProductById(this.currentId);
  });
}
  next(){
    this.idsArr = this._productService.mapIdsToArray();
    this.currentIdIndex = this.idsArr.indexOf(this.currentId);
    if(this.currentIdIndex < this.idsArr.length -1){
      this._router.navigate(['/Products', this.idsArr[this.currentIdIndex + 1]])
    }
  }
  previous(){
    this.idsArr = this._productService.mapIdsToArray();
    this.currentIdIndex = this.idsArr.findIndex((id) => id === this.currentId);
    if(this.currentIdIndex > 0){
      this._router.navigate(['/Products', this.idsArr[this.currentIdIndex - 1]])
    }
  }
  back(){
    this._location.back();
  }
  forward(){
    this._location.forward();
  }
}
