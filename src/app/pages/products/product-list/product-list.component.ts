import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/categories/category.models';
import { Product } from 'src/app/shared/models/products/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products:Product[] = [
    {
      id: 1,
      categoryId: 1,
      name:'sugar',
      description:'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      price: 50,
      quantity: 20,
      weight:50,
      image: ''
    }
  ];
  categories:Category[] = []

  constructor() { }

  ngOnInit() {
  }

}
