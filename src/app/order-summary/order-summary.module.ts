import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderSummaryComponent } from './order-summary.component';
import { OrderSummaryItemComponent } from './order-summary-item/order-summary-item.component';
import {SharedModule} from '../shared/shared.module'


const ROUTES: Routes = [
    {path: '', component: OrderSummaryComponent}
];

@NgModule({
  imports: [SharedModule,RouterModule.forChild(ROUTES)],
  declarations:[OrderSummaryComponent, OrderSummaryItemComponent]
})

export class OrderSummaryModule { }
