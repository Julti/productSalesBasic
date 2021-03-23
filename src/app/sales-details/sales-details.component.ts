import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvoiceDetail } from 'src/entities/InvoiceDetail';
import {QueryDataApiService} from '../query-data-api.service'
@Component({
  selector: 'app-sales-details',
  templateUrl: './sales-details.component.html',
  styleUrls: ['./sales-details.component.css']
})
export class SalesDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private apiService:QueryDataApiService) { }
  invoiceId:number
  details:InvoiceDetail[]
  ngOnInit(): void {
    this.invoiceId=parseInt(this.route.snapshot.paramMap.get('id'));
    this.getInvoices();
    console.log(this.details)
  }
  getInvoices():void{
    this.apiService.getDetails(this.invoiceId).subscribe(details=>this.details=details);
  }
}
