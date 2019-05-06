import { CategoriesService } from './categories.service';
import { Category } from './category/category.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  cats: Category[];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categoriesService.consumeCategories()
      .subscribe(cats => this.cats = cats)
  }

}
