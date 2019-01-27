import { Component, OnInit, Input} from '@angular/core';
import { Livro } from './book/book.model';
import { BooksService } from './books.service';


@Component({
  selector: 'mt-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  livros: Livro[];

  constructor(private bookService: BooksService) {}

  ngOnInit() {
    this.bookService.books()
      .subscribe(livros => this.livros = livros)
  }

}
