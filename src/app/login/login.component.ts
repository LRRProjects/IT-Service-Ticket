import { Component, OnInit } from "@angular/core";
import { User_ } from "../IT-Ticket-ServiceModel/User_";
import { ResponseMessage } from "../IT-Ticket-ServiceModel/ResponseMessage";
import { Service } from "../service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validator, Validators } from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(private Service: Service, private router: Router) {}
  public show = false;
  image = "background1";
  Username: string;
  Password: string;
  user = new User_();
  loading = false;
  ResponseMessage: ResponseMessage;

  ngOnInit() {}

  login(UserLogin: NgForm) {
    this.user = UserLogin.value;

    this.Service.logIn(this.user)
      .then((res) => {
        if (res.Success) {
          this.user = res.Data.Users;
          console.log(this.user);
          localStorage.setItem("users_name", this.user.Name);
          localStorage.setItem("users_lastname", this.user.Lastname);
          localStorage.setItem("token", res.Data.Tokens);
          localStorage.setItem("rol", this.user.Rol_id.toString());
          console.log(this.user.Rol_id);
          localStorage.setItem("id", this.user.id.toString());
          if (localStorage.getItem("rol") == "2") {
            this.router.navigate(["/dashboard"]);
          } else if (localStorage.getItem("rol") == "3") {
            this.router.navigate(["/techdashboard"]);
          } else if (localStorage.getItem("rol") == "1") {
            this.router.navigate(["/admindashboard"]);
          }
        } else {
          this.show = true;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
