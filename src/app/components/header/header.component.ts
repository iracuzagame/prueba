import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  cartItemsCount: number = 0; // Para almacenar el conteo actual del carrito

  constructor(private cartService: CartService) {}
 
  ngOnInit(): void {
    // Suscripción al observable cartItemsCount$ para obtener la cantidad en tiempo real
    this.cartService.cartItemsCount$.subscribe((count: number) => {
      this.cartItemsCount = count;
    });
  }
}
