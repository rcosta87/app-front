import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../book/book.model';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {

  @Input() book: Book

  constructor() { }

  ngOnInit() {
  }

}
