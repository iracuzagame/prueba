import { Injectable } from '@angular/core';
import { CartItem } from './models/cart-item.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];

  private cartItemsCount = new BehaviorSubject<number>(0);
  cartItemsCount$ = this.cartItemsCount.asObservable();

  combos = [
    { id: 1, name: 'Combo popular', 
      price: 7, 
      imageUrl: 'assets/imgs/combo popular.jpg',
      description: '250gr .... Queso duro., 250gr .... Jamon de pierna., 250gr .... Salchicha polaca., 100gr .... Tocineta.' },
    { id: 2, 
      name: 'Combo extra', 
      price: 15, 
      imageUrl: 'assets/imgs/combo-extra.jpg',
      description: '500gr .... Queso duro., 250gr .... Jamon de pierna., 250gr .... Jamon de pavo., 250gr .... Queso paisa., 500gr .... Salchicha polaca., 150gr .... Tocineta.' },

    { id: 3, 
      name: 'Combo millenium', 
      price: 17.50 ,
      imageUrl: 'assets/imgs/combo-millenium.jpg',
      description: '500gr .... Queso duro., 500gr .... Queso guayanes., 500gr .... Jamon de pierna., 250gr .... Queso paisa., 250gr .... Queso amarillo.,  100gr .... Tocineta.' },
    
  ];

  mixedCombos = [
    {
      name: 'Combo Gran Caracas',
      price: 29,
      imageUrl: 'assets/imgs/combo-gran-caracas.jpg',
      description: '500gr .... Queso duro. , 500gr  Jamon de pierna. , 500gr .... Queso guayanes.,500gr .... Queso paisa., 250gr .... Jamon de pavo., 500gr .... Queso amarillo., 100gr .... De tocineta., 1/2 .... Carton de huevo., 1 .... Harina Pan., 1 .... Mantequilla. ',
    },
    {
      name: 'Combo Los Simbolos',
      price: 32,
      imageUrl: 'assets/imgs/combo-los-simbolos.jpg',
      description: "1kg .... Queso duro.,500gr .... Jamon de pierna.,500gr .... Salcichas polacas., 500gr .... Queso paisa., 500gr .... Jamon de pavo., 500gr .... Queso amarillo., 1/2 .... Carton de huevo. ",
    },
    {
      name: 'Combo Express',
      price: 8.5,
      imageUrl: 'assets/imgs/como-express.jpg',
      description: '250gr .... Jamón, 500gr .... Queso, 1 .... Harina Pan',
    },
    
  ];


  getCartItems(): CartItem[] {
    return this.items;
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  addToCart(item: CartItem): void {
    // Verificamos si el item ya existe en el carrito
    const existingItem = this.items.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({ ...item, quantity: 1 });
    }

    this.updateCartItemsCount();
  }

  clearCart(): void {
    this.items = [];
    this.updateCartItemsCount(); // Notifica que el carrito está vacío
  }

  getCombos(): any[] {
    return this.combos;
  }

  getMixedCombos(): any[] {
    return this.mixedCombos;
  }

  private updateCartItemsCount(): void {
    // Calcula el total de productos en el carrito
    const totalItems = this.items.reduce((count, item) => count + item.quantity, 0);
    this.cartItemsCount.next(totalItems); // Notifica el nuevo conteo
  }

}