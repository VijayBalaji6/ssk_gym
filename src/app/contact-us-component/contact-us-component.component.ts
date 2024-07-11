import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-contact-us-component",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./contact-us-component.component.html",
  styleUrl: "./contact-us-component.component.css",
})
export class ContactUsComponentComponent {
  phoneNumber = "+91 - 8200060000";
  copyright = "© 2014 figma.com@saadshaikh";

  menuItems = ["Home", "About", "Trainers", "Plans", "Reviews"];
  socialMedia = [
    { name: "LinkedIn", icon: "linkedin" },
    { name: "Facebook", icon: "facebook" },
  ];
}
