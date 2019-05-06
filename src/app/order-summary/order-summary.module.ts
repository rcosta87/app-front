import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module'
import { OrderSummaryItemsComponent } from './order-summary-items/order-summary-items.component';
import { OrderSummaryComponent } from './order-summary.component';


const ROUTES: Routes = [
    {path: '', component: OrderSummaryComponent}
];

@NgModule({
  imports: [SharedModule,RouterModule.forChild(ROUTES)],
  declarations:[OrderSummaryComponent, OrderSummaryItemsComponent]
})

export class OrderSummaryModule { }
