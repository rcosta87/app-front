import { Injectable } from '@angular/core'

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { ShoppingCartService } from '../shopping-cart/shopping-cart.service'
import { CartItem } from '../shopping-cart/cart-item.model'
import { Order } from './order.model'

import { BOOK_API } from '../app.api'


@Injectable()
export class OrderService {


  constructor(private cartService: ShoppingCartService,
              private http: HttpClient){}

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
    return this.http.post<Order>(`${BOOK_API}/orders`, order)
      .pipe(map(order => order.id))
  }

  getMyOrder(id: string){
    return this.http.get<Order>(`${BOOK_API}/orders/${id}`)
  }


}
