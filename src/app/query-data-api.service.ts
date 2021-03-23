import { Injectable } from '@angular/core';
import {Product} from '../entities/Product';
import {Customer} from '../entities/Customer';
import {Invoice} from '../entities/Invoice';
import {InvoiceDetail} from '../entities/InvoiceDetail';
import { Observable,of} from 'rxjs';
import { HttpClientModule, HttpClient ,HttpHeaders}    from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class QueryDataApiService {
  private apiProductosURL = 'https://localhost:44306/product';
  private apiCustomersURL = 'https://localhost:44306/customer';
  private apiInvoiceURL = 'https://localhost:44306/invoice';
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getProductos():Observable<Product[]>{
    let response = this.http.get<Product[]>(this.apiProductosURL);
    console.log(response);
    return response;
  }
  getCustomers():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.apiCustomersURL);
  }
  getInvoices():Observable<Invoice[]>{
    return this.http.get<Invoice[]>(this.apiInvoiceURL);
  }
  getDetails(id:number):Observable<InvoiceDetail[]>{
    const url = `${this.apiInvoiceURL}/details?invoiceId=${id}`;
    console.log(url)
    return this.http.get<InvoiceDetail[]>(url);
  }
  deleteProduct(id:number):Observable<any>{
    const url = `${this.apiProductosURL}?productId=${id}`;
    return this.http.delete(url);
  }
  deleteCustomer(id:number):Observable<any>{
    const url = `${this.apiCustomersURL}?customerId=${id}`;
    return this.http.delete(url);
  }
  createProduct(product:Product):Observable<any>{
    return this.http.post(this.apiProductosURL,product,this.httpOptions);
  }
  createCustomer(customer:Customer):Observable<any>{
    return this.http.post(this.apiCustomersURL,customer,this.httpOptions);
  }
  createInvoice(invoice:Invoice):Observable<any>{
    return this.http.post(this.apiInvoiceURL,invoice,this.httpOptions);
  }
  updateProduct(product:Product):Observable<any>{
    return this.http.put(this.apiProductosURL,product,this.httpOptions);
  }
  updateCustomer(customer:Customer):Observable<any>{
    return this.http.put(this.apiCustomersURL,customer,this.httpOptions);
  }
}
