import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from './../../books.service';
import { Component, OnInit, Input } from '@angular/core';
import { ReviewofBook } from './reviews.model';

@Component({
  selector: 'mt-reviews-book',
  templateUrl: './reviews-book.component.html',
  styleUrls: ['./reviews-book.component.css']
})
export class ReviewsBookComponent implements OnInit {

  @Input() review: ReviewofBook ;

  constructor() { }

  ngOnInit() {

  }

}
