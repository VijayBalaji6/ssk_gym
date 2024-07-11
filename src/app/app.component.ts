import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AboutComponentComponent } from "./about-component/about-component.component";
import { ContactUsComponentComponent } from "./contact-us-component/contact-us-component.component";
import { HomeComponentComponent } from "./home-component/home-component.component";
import { PlansComponentComponent } from "./plans-component/plans-component.component";
import { ReviewsComponentComponent } from "./reviews-component/reviews-component.component";
import { TrainersComponentComponent } from "./trainers-component/trainers-component.component";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponentComponent,
    AboutComponentComponent,
    TrainersComponentComponent,
    PlansComponentComponent,
    ReviewsComponentComponent,
    ContactUsComponentComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {}
