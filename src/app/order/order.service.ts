import {Injectable, EventEmitter, Output} from '@angular/core'

import {Http, Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import {ShoppingCartService} from '../books/book-detail/shopping-cart/shopping-cart.service'
import {CartItem} from '../books/book-detail/shopping-cart/cart-item.model'
import {Order, OrderItem } from './order.model'

import {BOOK_API} from '../app.api'

@Injectable()
export class OrderService {

  myOrder: Order;

  constructor(private cartService: ShoppingCartService, private http: Http){}

  itemsValue(): number {
    return this.cartService.total()
  }

  cartItems(): CartItem[]{
    return this.cartService.items
  }

  increaseQty(item: CartItem){
    this.cartService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.cartService.decreaseQty(item)
  }

  remove(item: CartItem){
    this.cartService.removeItem(item)
  }

  clear(){
    this.cartService.clear()
  }

  checkOrder(order: Order): Observable<string> {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    this.myOrder = order;
    return this.http.post(`${BOOK_API}/orders`,
                          JSON.stringify(order),
                          new RequestOptions({headers: headers}))
                    .map(response=> response.json())
                    .map(order => order.id)
  }

  getMyOrder(){
    return this.myOrder;
  }


}
