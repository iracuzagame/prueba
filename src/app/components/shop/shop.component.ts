import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { CartItem } from '../../models/cart-item.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shop',
  imports: [RouterLink],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})

export class ShopComponent implements OnInit {
  cartItems: CartItem[] = [];
  total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();
  }
}
