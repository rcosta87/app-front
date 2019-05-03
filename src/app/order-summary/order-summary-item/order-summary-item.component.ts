import { Component, OnInit, Input} from '@angular/core';
import { OrderItem } from 'app/order/order.model';


@Component({
  selector: '[mt-order-summary-itens]',
  templateUrl: './order-summary-item.component.html',
  styleUrls: ['./order-summary-item.component.css']
})
export class OrderSummaryItemComponent implements OnInit {

  @Input() orderItem: OrderItem

  constructor() { }

  ngOnInit() {
  }

}
