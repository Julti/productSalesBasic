import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { CustomerManagerComponent } from './customer-manager/customer-manager.component';
import { SalesManagerComponent } from './sales-manager/sales-manager.component';
import { FormsModule } from '@angular/forms';
import { SalesLogComponent } from './sales-log/sales-log.component';
import { SalesDetailsComponent } from './sales-details/sales-details.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProductManagerComponent,
    CustomerManagerComponent,
    SalesManagerComponent,
    SalesLogComponent,
    SalesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
