import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styles: [
  ]
})
export class ImgComponent implements OnInit, OnChanges {

  // Runs once, fetch
  // Async, Before render
  ngOnInit(): void {
    console.log("onInit ImgComponent");

  }

  // Listen to changes on @Input
  ngOnChanges() {

  }


  @Input() value: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = '../../../assets/default.png';

  imgError() {
    this.value = this.imageDefault;
  }

  imgLoaded() {
    console.log('loaded son');
    this.loaded.emit(this.value);
  }
}
