import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [
  ]
})
export class ProductComponent {
  @Input() product: Product = {
    id: '',
    image: '',
    images: [],
    title: '',
    price: 0,
    description: '',
    category: ''
  }

  @Output() addedToCart = new EventEmitter<Product>();

  addToCart() {
    this.addedToCart.emit(this.product);
  }

}
