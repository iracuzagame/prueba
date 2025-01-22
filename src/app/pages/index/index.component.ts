import { Component, OnDestroy ,AfterViewInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AboutComponent } from "../../components/about/about.component";
import { ProductsComponent } from "../../components/products/products.component";
import { CombosComponent } from "../../components/combos/combos.component";
import { ReviewsComponent } from "../../components/reviews/reviews.component";
import { Router } from '@angular/router';




@Component({
  selector: 'app-index',
  imports: [HeaderComponent, FooterComponent, AboutComponent, ProductsComponent, CombosComponent, ReviewsComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent implements AfterViewInit, OnDestroy {

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
