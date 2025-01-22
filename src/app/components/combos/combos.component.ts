import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { CartItem } from '../../models/cart-item.model';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-combos',
  imports: [RouterLink],
  templateUrl: './combos.component.html',
  styleUrl: './combos.component.scss'
})
export class CombosComponent implements OnInit {

  combos = [
    { id: 1, 
      name: 'Combo popular', 
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
    { id: 1,
      name: 'Combo Express',
      price: 8.5,
      imageUrl: 'assets/imgs/como-express.jpg',
      description: '250gr .... Jamón, 500gr .... Queso, 1 .... Harina Pan',
    },
    { id: 2,
      name: 'Combo Gran Caracas',
      price: 29,
      imageUrl: 'assets/imgs/combo-gran-caracas.jpg',
      description: '500gr .... Queso duro. , 500gr  Jamon de pierna. , 500gr .... Queso guayanes.,500gr .... Queso paisa., 250gr .... Jamon de pavo., 500gr .... Queso amarillo., 100gr .... De tocineta., 1/2 .... Carton de huevo., 1 .... Harina Pan., 1 .... Mantequilla. ',
    },
    { id: 3,
      name: 'Combo Los Simbolos',
      price: 32,
      imageUrl: 'assets/imgs/combo-los-simbolos.jpg',
      description: "1kg .... Queso duro.,500gr .... Jamon de pierna.,500gr .... Salcichas polacas., 500gr .... Queso paisa., 500gr .... Jamon de pavo., 500gr .... Queso amarillo., 1/2 .... Carton de huevo. ",
    },
    
  ];


  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart(combo: any): void {
    const item: CartItem = {
      id: combo.id,
      name: combo.name,
      price: combo.price,
      quantity: 1,
      imageUrl: combo.imageUrl
    };
    this.cartService.addToCart(item);
  }
}