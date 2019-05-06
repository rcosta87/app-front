import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BooksService } from './../books.service';
import { ShoppingCartService } from '../../shopping-cart/shopping-cart.service';
import { tap } from 'rxjs/operators'
import { Book } from '../book/book.model'
import { CategoriesService } from '../../categories/categories.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: Book
  quantidade: number = 0
  authorName: string
  section: string
  catName: string

  constructor(
    private bookService: BooksService,
    private shoppingCartService: ShoppingCartService,
    private activatedRoute: ActivatedRoute,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit() {
    this.bookService.bookById(this.activatedRoute.snapshot.params['id'])
      .pipe(
        tap(autorBook => this.bookService.authorOfBook(autorBook.autorId)
          .subscribe(author =>  this.authorName = author.name)
        ),
        tap(catName => this.categoriesService.categoryDetail(catName.categoriaId)
          .subscribe(cat => this.catName = cat.name)
        )
      )
      .subscribe(book =>  this.book = book)
  }

  getSection(title:string){
    this.section = title
  }

  emitAddEvent(){
    this.shoppingCartService.addItem(this.book);
  }

}
