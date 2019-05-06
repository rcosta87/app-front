import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { Subscription } from 'rxjs'


@Component({
  selector: 'app-shopping-cart-icon',
  templateUrl: './shopping-cart-icon.component.html',
  styleUrls: ['./shopping-cart-icon.component.css']
})
export class ShoppingCartIconComponent implements OnInit {

  countIntens: number = 0
  getCounter: Subscription;

  constructor(private shoppingService: ShoppingCartService) { }

  ngOnInit() {
    this.getCounter = this.shoppingService.getCounter()
    .subscribe(count => this.countIntens = count)
  }

  ngOnDestroy() {
    this.getCounter.unsubscribe();
  }

}
