import { OrderService } from './../order/order.service';
import { Component, OnInit } from '@angular/core';
import { Order, OrderItem } from '../order/order.model';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  rated: boolean
  order: Order
  orderItens: OrderItem[];
  valueTotalCart: number = 0

  constructor(private oderService: OrderService,
              private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.oderService.getMyOrder(this.activeRoute.snapshot.params['id'])
      .pipe(
        tap(order => {
          this.orderItens = order.orderItems
        })
      )
      .subscribe((order) => {
        this.order = order
      })
  }

  rate() {
    this.rated = true
  }

  getTotal(total: number){
    this.valueTotalCart = this.valueTotalCart + total
  }

  getValueTotalDeliveryCost():number{
    return this.valueTotalCart + this.order.frete
  }




}
