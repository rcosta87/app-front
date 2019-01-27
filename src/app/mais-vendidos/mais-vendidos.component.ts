import { BooksService } from './../books/books.service';
import { Livro } from './../books/book/book.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-mais-vendidos',
  templateUrl: './mais-vendidos.component.html',
  styleUrls: ['./mais-vendidos.component.css']
})
export class MaisVendidosComponent implements OnInit {

  livros: Livro[];
  slideConfigSells = {"slidesToShow": 3, "slidesToScroll": 3, "autoplay": false, "arrows": true};


  constructor(private bookService: BooksService) {}

  ngOnInit() {
    this.bookService.books()
      .subscribe(livros => this.livros = livros)
  }
}
