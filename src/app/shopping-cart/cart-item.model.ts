import { Book } from '../books/book/book.model';

export class CartItem {
  constructor(public menuItem: Book,
              public quantity: number = 1){}

  value(): number {
    return this.menuItem.price * this.quantity
  }
}
