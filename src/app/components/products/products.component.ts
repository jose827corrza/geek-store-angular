import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from './../../services/store.service';
import { ProductsService } from './../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
  ]
})
export class ProductsComponent implements OnInit{
  date = new Date(2019, 1,1)
  today = new Date()
  products: Product[] = []

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myCartItems = this.storeService.getMyCartItems();
  }
  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data => {
      this.products = data;
    })
  }
  myCartItems: Product[] = [];
  total = 0;


  onAddToCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
    // this.myCartItems.push(product);
    // this.total = this.myCartItems.reduce((sum, item) => sum + item.price, 0)
  }



}
