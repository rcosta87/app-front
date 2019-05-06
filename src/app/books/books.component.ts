import { Component, OnInit, Input} from '@angular/core';
import { Book } from './book/book.model';
import { BooksService } from './books.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Observable<Book[]>;

  constructor(private bookService: BooksService) {}

  ngOnInit() {
    this.books = this.bookService.books()
  }

}
