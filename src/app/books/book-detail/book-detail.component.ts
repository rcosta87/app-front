import { CartItem } from './shopping-cart/cart-item.model';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BooksService } from './../books.service';
import { Livro } from './../book/book.model';

import { ShoppingCartService } from './../book-detail/shopping-cart/shopping-cart.service';
import { ReviewofBook } from './reviews-book/reviews.model';


@Component({
  selector: 'mt-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  livro: Livro;
  quantidade: number = 0;
  reviews: ReviewofBook[]

  constructor(
    private bookService: BooksService,
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit() {
    this.bookService
      .bookById(this.route.snapshot.params["id"])
      .subscribe(livro => (this.livro = livro));

    this.bookService
      .reviewsOfBook(this.route.snapshot.params["id"])
      .subscribe(reviews => this.reviews = reviews);
  }

  emitAddEvent(){
    this.shoppingCartService.addItem(this.livro, this.quantidade);
  }

  plusQuantity(){
    this.quantidade = this.quantidade + 1;
  }

}


