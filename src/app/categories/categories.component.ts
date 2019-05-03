import { CategoriesService } from './categories.service';
import { Category } from './category/category.model';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs'
import { Router } from '@angular/router';
import { CategoryDetailComponent } from './category-detail/category-detail.component';

@Component({
  selector: 'mt-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  cats: Category[];
  subscription: Subscription;


  constructor(private categoriesService: CategoriesService,
              private router: Router) { }

  ngOnInit() {
    this.categoriesService.consumeCategories()
      .subscribe(cats => this.cats = cats)
  }

  goToCategoryDetail(category: Category){
    this.router.navigate(['/detalhe-categoria', category.id])
  }

}
