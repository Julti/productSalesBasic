import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/entities/Invoice';
import { InvoiceDetail } from 'src/entities/InvoiceDetail';
import {QueryDataApiService} from '../query-data-api.service'
@Component({
  selector: 'app-sales-log',
  templateUrl: './sales-log.component.html',
  styleUrls: ['./sales-log.component.css']
})
export class SalesLogComponent implements OnInit {

  constructor(private apiService:QueryDataApiService) { }
  invoices:Invoice[]
  ngOnInit(): void {
    this.getInvoices();
  }
  getInvoices():void{
    this.apiService.getInvoices().subscribe(invoices => this.invoices = invoices);
  }
}
