import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  action:string = "";
  productId:number = 0;

  constructor(private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(({ id }) => {
      if(Number.isInteger(+id)){
        this.productId = +id;
        this.getProduct();
        this.getQueryParams()
      }
      else{
        this.action = "create";
      }
    })
  }

  getQueryParams(){
    this.activatedRoute.queryParams.subscribe(({type}) => {
      this.action = type ?? 'create'
      console.log(type)
    })
  }

  getProduct(){

  }

}
