import { Component, HostListener, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('menuState', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('300ms ease-out', style({ transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateY(-100%)' }))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  menuOpen: boolean = false;
  cartItemsCount: number = 0; // Para almacenar el conteo actual del carrito

  constructor(private cartService: CartService, private router: Router) {}

 
  ngOnInit(): void {
    this.cartService.cartItemsCount$.subscribe((count: number) => {
      this.cartItemsCount = count;
    });

    // Detectar el cambio de ruta para "resetear" el menú
    this.router.events.subscribe(() => {
      this.menuOpen = false; // Resetear el estado del menú
    });
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen; // Alternar estado del menú
  }

}


