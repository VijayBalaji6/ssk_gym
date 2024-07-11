import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
@Component({
  selector: "app-trainers-component",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./trainers-component.component.html",
  styleUrl: "./trainers-component.component.css",
})
export class TrainersComponentComponent {
  trainers: Trainer[] = [
    {
      name: "",
      description: "",
      imageUrl: "assets/trainer1.jpg",
    },
    {
      name: "Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "assets/trainer2.jpg",
    },
    {
      name: "",
      description: "",
      imageUrl: "assets/trainer3.jpg",
    },
  ];
}

interface Trainer {
  name: string;
  description: string;
  imageUrl: string;
}
