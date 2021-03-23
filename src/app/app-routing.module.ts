import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductManagerComponent} from './product-manager/product-manager.component'
import {CustomerManagerComponent} from './customer-manager/customer-manager.component'
import {SalesManagerComponent} from './sales-manager/sales-manager.component'
import {SalesLogComponent} from './sales-log/sales-log.component'
import {SalesDetailsComponent} from './sales-details/sales-details.component'
const routes: Routes = [
  {path:'product',component:ProductManagerComponent},
  {path:'customer',component:CustomerManagerComponent},
  {path:'sales',component:SalesManagerComponent},
  {path:'log',component:SalesLogComponent},
  {path:'detail/:id',component:SalesDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
