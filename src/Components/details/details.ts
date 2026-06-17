import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { ProductsService } from '../../app/Services/Product-Service/products-service';
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
    this._productService.getProductById(this.currentId).subscribe({
      next: (data) => {
        this.product = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  });
}
  next(){
  this._productService.mapIdsToArray().subscribe({
    next: (data) => {
      this.idsArr = data;

      this.currentIdIndex = this.idsArr.indexOf(this.currentId);
console.log('Current Id:', this.currentId);
console.log('Ids Array:', this.idsArr);
console.log('Current Index:', this.currentIdIndex);
      if(this.currentIdIndex < this.idsArr.length - 1){
        this._router.navigate([
          '/Products',
          this.idsArr[this.currentIdIndex + 1]
        ]);
      }
    }
  });
}
  previous(){
  this._productService.mapIdsToArray().subscribe({
    next: (data) => {
      this.idsArr = data;

      this.currentIdIndex = this.idsArr.indexOf(this.currentId);
      
      if(this.currentIdIndex > 0){
        this._router.navigate([
          '/Products',
          this.idsArr[this.currentIdIndex - 1]
        ]);
      }
    }
  });
}
  back(){
    this._location.back();
  }
  forward(){
    this._location.forward();
  }
}
