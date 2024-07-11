import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-home-component",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./home-component.component.html",
  styleUrl: "./home-component.component.css",
})
export class HomeComponentComponent {
  gymLogo: string = "src/assets/home/nav_bar/gym_logo.svg";
  workOutMan: string = "src/assets/home/nav_bar/gym_logo.svg";
  navBarElements: string[] = ["home", "about", "trainers", "plans", "reviews"];
  socialAccountElements: string[] = ["Facebook", "Instagram"];
}
