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
  menuOpen: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen; // Alternar estado del menú
  }

  decreaseQuantity(item: CartItem): void {
    // Disminuye la cantidad de un item en el carrito
    if (item.quantity > 1) {
      item.quantity--;
      this.updateTotal();  // Actualiza el total
    }
  }

  removeItem(item: CartItem): void {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1); // Elimina el item del carrito
      this.updateTotal();  // Actualiza el total
    }
  }

  updateTotal(): void {
    // Calcula el total del carrito
    this.total = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

}