import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, Button],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-learn-rxjs';
}
