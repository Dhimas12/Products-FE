import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/products/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product!:Product;
  hover:boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
