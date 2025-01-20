import { Component } from '@angular/core';
import { IndexComponent } from './pages/index/index.component';


@Component({
  selector: 'app-root',
  imports: [ IndexComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gregoriana';
}
