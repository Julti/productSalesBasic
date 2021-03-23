import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/entities/Customer';
import { Product } from 'src/entities/Product';
import { Invoice } from 'src/entities/Invoice';
import { InvoiceDetail } from 'src/entities/InvoiceDetail';
import {QueryDataApiService} from '../query-data-api.service'
@Component({
  selector: 'app-sales-manager',
  templateUrl: './sales-manager.component.html',
  styleUrls: ['./sales-manager.component.css']
})
export class SalesManagerComponent implements OnInit {

  constructor(private apiService:QueryDataApiService) { }
  customers:Customer[]
  products:Product[]
  @Input()invoice:Invoice
  @Input()currentDetail:InvoiceDetail
  ngOnInit(): void {
    this.getCustomers();
    this.getProducts();
    this.invoice = new Invoice();
    this.currentDetail = new InvoiceDetail();
  }
  getCustomers():void{
    this.apiService.getCustomers().subscribe(customers => this.customers = customers);
  }
  getProducts():void{
    this.apiService.getProductos().subscribe(products => this.products = products);
  }
  setCurrentDetail():void{
    this.currentDetail.unitPrice=this.products.filter(p1=>p1.id==this.currentDetail.productId)[0].unitPrice;
    if(this.currentDetail.quantity==null){
      this.currentDetail.totalPrice=this.currentDetail.unitPrice;
    }else{
      this.currentDetail.totalPrice=this.currentDetail.unitPrice*this.currentDetail.quantity;
    }
  }
  updateTotalPrice():void{
    if(isNaN(this.currentDetail.quantity)){
      alert("Cantidad Invalida!");
      this.currentDetail.quantity=0;
    }else if(this.currentDetail.quantity!=null){
      this.currentDetail.totalPrice=this.currentDetail.unitPrice*this.currentDetail.quantity;
    }
  }
  addDetail():void{
    this.invoice.details.push(this.currentDetail);
    this.currentDetail=new InvoiceDetail();
  }
  saveInvoice():void{
    this.invoice.details.forEach(x=>x.unitPrice=parseFloat(x.unitPrice.toString()));
    this.invoice.details.forEach(x=>x.quantity=parseFloat(x.quantity.toString()));
    this.invoice.details.forEach(x=>x.totalPrice=parseFloat(x.totalPrice.toString()));
    this.apiService.createInvoice(this.invoice).subscribe(res=>alert("Factura Guardada"),err=>alert("Error en creación"));
    this.invoice = new Invoice();
  }
}
