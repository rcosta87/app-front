import { ActivatedRoute } from '@angular/router';

import { Book } from './../../books/book/book.model';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './../categories.service';


@Component({
  selector: 'mt-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  books: Book[]
  message: string
  catName: string


  constructor(private categoriesService: CategoriesService,
    private activatedRoute: ActivatedRoute) {
    }

  ngOnInit() {
    this.categoriesService.booksOfCategory(this.activatedRoute.snapshot.params['id'])
      .subscribe(books => this.books = books)

    this.categoriesService.categoryDetail(this.activatedRoute.snapshot.params['id'])
      .subscribe(cat => this.catName = `Livros sobre ${cat.name}`)
  }

}
