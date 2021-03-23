import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/entities/Product';
import {QueryDataApiService} from '../query-data-api.service'
import { Location } from '@angular/common';
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {

  constructor(private apiService:QueryDataApiService) { }
  products:Product[]
  @Input() productFocus:Product
  showForm:boolean
  ngOnInit(): void {
    this.showForm=false;
    this.getProducts();
    this.productFocus = new Product();
  }
  getProducts():void{
    this.apiService.getProductos().subscribe(products => this.products = products);
  }
  deleteProduct(product:Product):void{
    this.products = this.products.filter(p1=>p1!==product);
    this.apiService.deleteProduct(product.id).subscribe();
  }
  updateProductForm(product:Product):void{
    this.productFocus=product;
  }
  saveObject():void{
    console.log(this.productFocus);
    if(this.productFocus.id!=null){
      this.apiService.updateProduct(this.productFocus).subscribe(()=>this.refreshView());
    }else{
      this.apiService.createProduct(this.productFocus).subscribe(()=>this.refreshView());
    }
  }
  enableForm():void{
    this.showForm=true;
  }
  refreshView():void{
    this.getProducts();
    this.productFocus = new Product();
  }
}
