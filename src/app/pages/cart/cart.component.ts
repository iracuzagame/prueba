import { Component, OnInit } from '@angular/core';
import { ShopComponent } from "../../components/shop/shop.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CartItem } from '../../models/cart-item.model';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ShopComponent, FooterComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  total: number = 0;

  constructor(
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();}

    

}