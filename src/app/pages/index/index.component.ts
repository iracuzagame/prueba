import { Component, OnDestroy ,AfterViewInit, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AboutComponent } from "../../components/about/about.component";
import { ProductsComponent } from "../../components/products/products.component";
import { CombosComponent } from "../../components/combos/combos.component";
import { ReviewsComponent } from "../../components/reviews/reviews.component";
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-index',
  imports: [HeaderComponent, FooterComponent, AboutComponent, ProductsComponent, CombosComponent, ReviewsComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  ngAfterViewInit(): void {
    // Asegurarse de resetear el estado affix cuando la vista se haya inicializado
    this.resetAffixState();
  }

  ngOnDestroy(): void {
    // Asegurarse de resetear el estado affix cuando se destruya el componente
    this.resetAffixState();
  }

  private resetAffixState(): void {
    const navbar = document.querySelector('.custom-navbar');
    if (navbar) {
      navbar.classList.remove('affix', 'affix-top', 'affix-bottom');
    }
  }
}
