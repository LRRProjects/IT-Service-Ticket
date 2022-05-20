import { ResponseMessage } from "./../IT-Ticket-ServiceModel/ResponseMessage";
import { User_ } from "./../IT-Ticket-ServiceModel/User_";
import { Service } from "./../service";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
  rol = localStorage.getItem("rol");
  Name = localStorage.getItem("users_name");
  Lastname = localStorage.getItem("users_lastname");

  show = false;
  show1 = false;
  show2 = false;
  Information: string;

  constructor(private Service: Service, private router: Router) {
    if (localStorage.getItem("rol") == "2") {
      this.show = true;
    } else if (localStorage.getItem("rol") == "3") {
      this.show1 = true;
    } else if (localStorage.getItem("rol") == "1") {
      this.show2 = true;
    }
  }

  logout(): void {
    localStorage.removeItem("users_name");
    localStorage.removeItem("users_lastname");
    localStorage.removeItem("rol");
    localStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }
}
