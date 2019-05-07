import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderItem } from '../../order/order.model';
import { BooksService } from 'src/app/books/books.service';
import { Book } from 'src/app/books/book/book.model';

@Component({
  selector: '[app-order-summary-itens]',
  templateUrl: './order-summary-items.component.html',
  styleUrls: ['./order-summary-items.component.css']
})
export class OrderSummaryItemsComponent implements OnInit {

  @Input() orderItem: OrderItem
  @Output() valueTotal = new EventEmitter()
  orderDetail: Book
  total: number

  constructor( private bookService: BooksService) { }

  ngOnInit() {
    this.bookService.bookById(this.orderItem.menuId)
      .subscribe(orderDetail => {
        this.orderDetail = orderDetail
        this.total = orderDetail.price * this.orderItem.quantity
        this.valueTotal.emit(this.total)
      })
  }
}
