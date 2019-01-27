import { Livro } from './../../book/book.model';

export class CartItem {
  constructor(public menuItem: Livro,
              public quantity: number = 1){}

  value(): number {
    return this.menuItem.price * this.quantity
  }
}
