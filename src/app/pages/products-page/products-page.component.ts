import { Component, OnInit } from '@angular/core';
import { sum } from '@angular/fire/firestore';
import { Product, ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  products: Product[]= [];
  totalSum: number = 0;
  maxPrice: number = 0;
  group: number[] = [1,2,3,4,5,6,7,8,8,10];

  constructor(
    private productsService: ProductsService
  ){}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
      this.get();
      // this.totalSum = this.products.reduce((sum: number, product: Product) => sum + product.price, 0);
    });
  }
  get(){
    this.totalSum = this.products.reduce((sum:number , product: Product) => (sum + product.price) , 0);
    this.maxPrice = this.products.reduce((max:number , product: Product) => max > product.price ?  max : product.price , 0)
  }

}
