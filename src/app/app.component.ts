import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AppBarComponent } from './nav-bar-component/nav-bar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppBarComponent, HomeComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
