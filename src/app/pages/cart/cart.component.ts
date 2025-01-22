import { Component, OnDestroy ,AfterViewInit } from '@angular/core';
import { ShopComponent } from "../../components/shop/shop.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { Router } from '@angular/router';
import { CartItem } from '../../models/cart-item.model';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ShopComponent, FooterComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements AfterViewInit, OnDestroy {

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    // Cuando la vista se ha inicializado, eliminamos las clases 'affix' del navbar
    this.resetAffixState();
  }

  ngOnDestroy(): void {
    // Asegurarse de eliminar el efecto affix cuando se destruya el componente (esto cubre la navegación entre componentes)
    this.resetAffixState();
  }

  private resetAffixState(): void {
    const navbar = document.querySelector('.custom-navbar');
    if (navbar) {
      // Elimina las clases 'affix', 'affix-top', y 'affix-bottom' del navbar
      navbar.classList.remove('affix', 'affix-top', 'affix-bottom');
    }
  }
}