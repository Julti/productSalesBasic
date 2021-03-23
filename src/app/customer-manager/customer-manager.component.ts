import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/entities/Customer';
import {QueryDataApiService} from '../query-data-api.service'
@Component({
  selector: 'app-customer-manager',
  templateUrl: './customer-manager.component.html',
  styleUrls: ['./customer-manager.component.css']
})
export class CustomerManagerComponent implements OnInit {

  constructor(private apiService:QueryDataApiService) { }
  customers:Customer[]
  customerFocus:Customer
  showForm:boolean
  ngOnInit(): void {
    this.showForm=false;
    this.getCustomers();
    this.customerFocus = new Customer();
  }
  getCustomers():void{
    this.apiService.getCustomers().subscribe(customers => this.customers = customers);
  }
  deleteCustomer(customer:Customer):void{
    this.customers = this.customers.filter(p1=>p1!==customer);
    this.apiService.deleteCustomer(customer.id).subscribe();
  }
  updateCustomerForm(customer:Customer):void{
    this.showForm=true;
    this.customerFocus=customer;
  }
  saveObject():void{
    if(this.customerFocus.id!=null){
      this.apiService.updateCustomer(this.customerFocus).subscribe(()=>this.refreshView());
    }else{
      this.apiService.createCustomer(this.customerFocus).subscribe(()=>this.refreshView());
    }
  }
  enableForm():void{
    this.showForm=true;
  }
  refreshView():void{
    this.getCustomers();
    this.customerFocus = new Customer();
    this.showForm=false;
  }
}
