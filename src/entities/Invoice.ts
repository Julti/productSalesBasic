import {InvoiceDetail} from './InvoiceDetail'
export class Invoice{
    id:number;
    customerId:number;
    customerName:number;
    details:InvoiceDetail[]
    constructor(){
        this.details=[] as InvoiceDetail[]
    }
}