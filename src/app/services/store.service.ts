import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myCartItems: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable();


  addProduct(product: Product) {
    this.myCartItems.push(product);
    this.myCart.next(this.myCartItems)
  }

  getMyCartItems() {
    return this.myCartItems;
  }
  getTotal() {
    return this.myCartItems.reduce((sum, item) => sum + item.price, 0)
  }
}
