import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/products/product.model';
import { ProductService } from 'src/app/shared/services/products/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products:Product[] = [];

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.productService.get().subscribe({
      next: result =>{
        this.products = result as any;
      }
    })
  }
}
