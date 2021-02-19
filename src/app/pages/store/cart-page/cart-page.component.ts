import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/Models/cart.model';
import { CartUtil } from 'src/app/utils/cart.util';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html'
})
export class CartPageComponent implements OnInit {
  public cart: Cart = new Cart();
  public total: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.loadCart();
  }

  public loadCart() {
    this.cart = CartUtil.get();
  }

  public totalCart() {
    let total = 0;
    this.cart.items.forEach(item => {
      total += (item.price * item.quantity);
    });
    return total / 100;
  }
  public remove(item) {
    let index = this.cart.items.indexOf(item);
    this.cart.items.splice(index, 1);
    CartUtil.update(this.cart);
  }


  public clearCart() {
    CartUtil.clear();
    this.loadCart();
  }
}
