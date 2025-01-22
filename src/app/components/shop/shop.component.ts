import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CartService } from '../../cart.service';
import { CartItem } from '../../models/cart-item.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop',
  imports: [ CommonModule, RouterLink],
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

  decreaseQuantity(index: number): void {
    // Disminuye la cantidad de un item en el carrito
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
      this.updateTotal();  // Actualiza el total
    }
  }

  removeItem(index: number): void {
    // Elimina un item del carrito
    this.cartItems.splice(index, 1);
    this.updateTotal();  // Actualiza el total después de eliminar un item
  }

  updateTotal(): void {
    // Calcula el total del carrito
    this.total = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

}
