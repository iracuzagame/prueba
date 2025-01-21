import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { ScriptLoaderService } from './script-loader.service';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'gregoriana';

  constructor(private scriptLoader: ScriptLoaderService, private router: Router) {}

  ngOnInit(): void {
    // Cargar scripts externos
    this.scriptLoader.loadScripts([
      'assets/vendors/jquery/jquery-3.4.1.js',
      'assets/vendors/bootstrap/bootstrap.bundle.js',
      'assets/vendors/bootstrap/bootstrap.affix.js',
      'assets/vendors/wow/wow.js',
      'assets/js/foodhut.js'
    ]);

    // Reiniciar animación en cada cambio de ruta
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const navbar = document.querySelector('.custom-navbar');
        if (navbar) {
          navbar.classList.remove('scrolled'); // Elimina la clase existente
          setTimeout(() => navbar.classList.add('scrolled'), 10); // Vuelve a agregar la clase
        }
      }
    });
  }
}