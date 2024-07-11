import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-plans-component",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./plans-component.component.html",
  styleUrl: "./plans-component.component.css",
})
export class PlansComponentComponent {
  billingCycle: "monthly" | "yearly" = "monthly";

  packages: Package[] = [
    {
      name: "Basic Package",
      price: 25,
      features: [
        "Unlimited Gym Access",
        "2x Fitness Consultant",
        "Nutrition Tracking",
        "1x Free Suplement",
        "3 Days per week",
        "Personal Trainer",
      ],
    },
    {
      name: "Mid Package",
      price: 55,
      features: [
        "Unlimited Gym Access",
        "4x Fitness Consultant",
        "Nutrition Tracking",
        "3x Free Suplement",
        "5 Days per week",
        "Personal Trainer",
      ],
      isBestOffer: true,
    },
    {
      name: "Pro Package",
      price: 75,
      features: [
        "Unlimited Gym Access",
        "7x Fitness Consultant",
        "Nutrition Tracking",
        "5x Free Suplement",
        "Gym Card",
        "Personal Trainer",
      ],
    },
    {
      name: "Athlete Package",
      price: 105,
      features: [
        "Unlimited Gym Access",
        "Free Clothes",
        "All Training Program",
        "Free Fitness Consultant",
        "Free Suplement",
        "Gym Card",
      ],
    },
  ];

  toggleBillingCycle() {
    this.billingCycle = this.billingCycle === "monthly" ? "yearly" : "monthly";
  }
}

interface Package {
  name: string;
  price: number;
  features: string[];
  isBestOffer?: boolean;
}
