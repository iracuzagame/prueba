import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private router: Router) {}


  navegarInicio(){
    console.log(" Ir a Inicio ");
    this.router.navigate(['/']);

  }

}
