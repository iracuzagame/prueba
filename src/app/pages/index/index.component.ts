import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AboutComponent } from "../../components/about/about.component";
import { ProductsComponent } from "../../components/products/products.component";
import { CombosComponent } from "../../components/combos/combos.component";
import { ReviewsComponent } from "../../components/reviews/reviews.component";




@Component({
  selector: 'app-index',
  imports: [HeaderComponent, FooterComponent, AboutComponent, ProductsComponent, CombosComponent, ReviewsComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
 
}