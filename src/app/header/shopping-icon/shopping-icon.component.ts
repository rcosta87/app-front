import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './../../books/book-detail/shopping-cart/shopping-cart.service';

@Component({
  selector: 'mt-shopping-icon',
  templateUrl: './shopping-icon.component.html',
  styleUrls: ['./shopping-icon.component.css']
})
export class ShoppingIconComponent implements OnInit {

  count: number;

  constructor(private shoppingService: ShoppingCartService) { }

  ngOnInit() {

  }

  items(): any[] {
    return this.shoppingService.items;
  }

}
