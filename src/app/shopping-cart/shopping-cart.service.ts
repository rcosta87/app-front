import { Injectable } from '@angular/core'
import { CartItem } from './cart-item.model'
import { Book } from '../books/book/book.model';
import { Observable, Subject } from 'rxjs'

import { NotificationService } from '../shared/messages/notification.service';


@Injectable()
export class ShoppingCartService {

  private counter = new Subject<number>();
  items: CartItem[] = []

  constructor(private notificationService: NotificationService){}

  clear(){
    this.items = []
    this.counter.next(this.items.length)
  }

  addItem(item:Book, quantidade?: number){
    let foundItem = this.items.find((mItem)=> mItem.menuItem.id === item.id)
    if(!foundItem){
      this.items.push(new CartItem(item))
      this.notificationService.notify(`Você adicionou o item ${item.name}`)
    } else{
      this.notificationService.notify(`Item já adicionado ao carrinho!`)
    }
    this.counter.next(this.items.length)
  }

  increaseQty(item: CartItem){
    item.quantity = item.quantity + 1
  }

  decreaseQty(item: CartItem){
    item.quantity = item.quantity - 1
    if (item.quantity === 0){
      this.removeItem(item)
      this.notificationService.notify(`Você removeu o item ${item.menuItem.name}`)
      this.counter.next(this.items.length)
    }
  }

  removeItem(item:CartItem){
    this.items.splice(this.items.indexOf(item), 1)
    this.notificationService.notify(`Você removeu o item ${item.menuItem.name}`)
    this.counter.next(this.items.length)
  }

  total(): number{
    return this.items
      .map(item => item.value())
      .reduce((prev, value)=> prev+value, 0)
  }

  getQuantity(item:CartItem): number{
    return item.quantity;
  }

  getCounter(): Observable<any> {
    return this.counter.asObservable()
 }
}
