import { Component, OnInit, Input } from '@angular/core';
import { OrderItem } from '../../order/order.model';

@Component({
  selector: '[app-order-summary-itens]',
  templateUrl: './order-summary-items.component.html',
  styleUrls: ['./order-summary-items.component.css']
})
export class OrderSummaryItemsComponent implements OnInit {

  @Input() orderItem: OrderItem

  constructor() { }

  ngOnInit() {
  }

}
