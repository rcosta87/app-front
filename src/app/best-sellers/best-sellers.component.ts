import { BooksService } from './../books/books.service';
import { Book } from './../books/book/book.model';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'mt-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.css']
})
export class BestSellersComponent implements OnInit {

  books: Book[];

  slideConfigSells = {
    "slidesToShow": 3,
    "slidesToScroll": 3,
    "autoplay": false,
    "arrows": true,
    "responsive": [
      {
        "breakpoint": 768,
        "settings": {
          "slidesToShow": 1,
          "slidesToScroll": 1,
        }
      },
    ]

  };


  constructor(private bookService: BooksService) {}

  ngOnInit() {
    this.bookService.books()
      .subscribe(books => this.books = books)
  }

}
