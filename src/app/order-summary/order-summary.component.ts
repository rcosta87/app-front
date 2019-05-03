import { OrderService } from './../order/order.service';

import { Component, OnInit } from '@angular/core';
import { Order, OrderItem } from 'app/order/order.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-order-summary',
  templateUrl: './order-summary.component.html'
})


export class OrderSummaryComponent implements OnInit {

  rated: boolean
  order: Order
  orderItens: OrderItem[];
  valueTotalCart: number;

  constructor(private oderService: OrderService,
              private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.oderService.getMyOrder(this.activeRoute.snapshot.params['id'])
      .subscribe((order) => {
        this.order = order
        this.orderItens = order.orderItems;
        this.valueTotalShopping()
      })
  }

  rate() {
    this.rated = true
  }

  valueTotalShopping(): void{
    this.valueTotalCart = this.orderItens
      .map(item => item.total)
      .reduce((prev, value)=> prev+value, 0) + this.order.frete
  }

}
