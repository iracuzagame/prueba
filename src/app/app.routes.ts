import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { CombosComponent } from './components/combos/combos.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    {path: "home", component: HeaderComponent},
    {path: "about", component: AboutComponent},
    {path: "products", component: ProductsComponent},
    {path: "combos", component: CombosComponent}, 
    {path: "reviews", component: ReviewsComponent}, 
    {path: "footer", component: FooterComponent}, 
];
