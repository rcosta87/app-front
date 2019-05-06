import { Component, OnInit, Input} from '@angular/core';
import { BooksService } from '../../books.service';
import { ReviewofBook } from './reviews.model';

@Component({
  selector: 'app-reviews-book',
  templateUrl: './reviews-book.component.html',
  styleUrls: ['./reviews-book.component.css']
})
export class ReviewsBookComponent implements OnInit {

  @Input() reviewsId:string
  reviews: ReviewofBook[] ;

  constructor(private booksService: BooksService) { }

  ngOnInit() {
      this.booksService.reviewsOfBook(this.reviewsId)
        .subscribe(reviews => this.reviews = reviews)
  }

}
