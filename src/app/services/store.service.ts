import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myCartItems: Product[] = [];

  constructor() { }

  addProduct(product: Product) {
    this.myCartItems.push(product);
  }

  getMyCartItems() {
    return this.myCartItems;
  }
  getTotal() {
    return this.myCartItems.reduce((sum, item) => sum + item.price, 0)
  }
}
