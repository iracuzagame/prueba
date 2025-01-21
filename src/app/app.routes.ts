import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { IndexComponent } from './pages/index/index.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:"" , component: IndexComponent},
    {path:"home" , component: IndexComponent},
    {path:"cart", component: CartComponent }, 
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }