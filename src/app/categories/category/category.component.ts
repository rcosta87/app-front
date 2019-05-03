import { Category } from './category.model';
import { Component, OnInit, Input } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mt-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() category: Category

  constructor(private categoriesService: CategoriesService,
              private router: Router) { }

  ngOnInit() {

  }


}
