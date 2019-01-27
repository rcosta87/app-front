import { Livro } from './../books/book/book.model';
import { OrderService } from './../order/order.service';

import { Component, OnInit } from '@angular/core';
import { Order, OrderItem } from 'app/order/order.model';

@Component({
  selector: 'mt-order-summary',
  templateUrl: './order-summary.component.html'
})


export class OrderSummaryComponent implements OnInit {


  rated: boolean
  order: Order
  livro: Livro
  orderItens: OrderItem[];
  valueTotalCart: number = 1;

  constructor(private oderService: OrderService) {}

  ngOnInit() {
    this.order = this.oderService.getMyOrder();
    this.getOrderItems(this.order);
    console.log(this.orderItens)
    let total = 0;
    this.orderItens.forEach(function(el){
      total = total + el.total;
    });
    this.valueTotalCart = total + this.order.frete;
  }

  rate() {
    this.rated = true
  }

  getOrderItems(order: Order){
    this.orderItens = order.orderItems;
  }

  valueTotalShopping(): number{
    this.orderItens.forEach
    return this.valueTotalCart + this.order.frete;
  }


}
