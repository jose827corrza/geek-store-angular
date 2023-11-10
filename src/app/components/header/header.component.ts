import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor(
    private storeService: StoreService
  ){}
  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length
    })
  }

  active = true;
  counter = 0;

  toggleBurger() {
    console.log(this.active);

    this.active = !this.active
  }

}
