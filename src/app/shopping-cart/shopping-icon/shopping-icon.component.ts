import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../shopping-cart/shopping-cart.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'mt-shopping-icon',
  templateUrl: './shopping-icon.component.html',
  styleUrls: ['./shopping-icon.component.css']
})
export class ShoppingIconComponent implements OnInit {

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
