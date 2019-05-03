import { Component, OnInit, Input} from '@angular/core';
import { Book } from "./book.model";
import { CategoriesService } from 'app/categories/categories.service';
import { Observable } from 'rxjs';
import { Category } from 'app/categories/category/category.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'mt-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {


  @Input() book: Book;

  constructor() { }

  ngOnInit() {

  }


}
