import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductsModalComponent } from 'src/app/modals/products-modal/products-modal.component';
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
  // operation!: 'delete' | 'edit' | 'add';

  constructor(
    private productsService: ProductsService,
    private dialog: MatDialog,
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

  openDialog(operation : 'delete' | 'edit' | 'add' ,product?: Product) {
    this.dialog.open(ProductsModalComponent, {
      maxWidth: '95vw',
      data: {
        operation: operation,
        product: product
      }
    });
  }

}
