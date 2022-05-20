import { User_ } from "./../IT-Ticket-ServiceModel/User_";
import { clone } from "lodash";
import { Component } from "@angular/core";
import { CustomModel_ } from "../IT-Ticket-ServiceModel/CustomModel_";
import { Router } from "@angular/router";
import { Service } from "./../service";
import { Ticket_ } from "./../IT-Ticket-ServiceModel/Ticket_";
import { DatePipe } from "@angular/common";
import { DataTableModule } from "angular2-datatable";
import { Http } from "@angular/http";

import * as _ from "lodash";

@Component({
  selector: "user-dashboard",
  templateUrl: "./user-dashboard.component.html",

  styleUrls: ["./user-dashboard.component.css"],
})
export class UserDashboardComponent {
  editedUser: any = {};
  editUserForm: boolean = false;
  user = new User_();
  users: Array<User_> = new Array<User_>();
  userForm: boolean = false;
  isNewform: boolean;
  newUser: any = {};
  customs: Array<CustomModel_> = new Array<CustomModel_>();
  custom = new CustomModel_();

  Id = localStorage.getItem("id");
  Name = localStorage.getItem("users_name");
  Lastname = localStorage.getItem("users_lastname");

  constructor(private Service: Service, private router: Router) {
    if (localStorage.getItem("rol") == "2") {
      this.user.Id = localStorage.getItem("id");
      console.log(this.user.Id);
    }
    Service.SpecificTicket(this.user)
      .then((res) => {
        if (res.Success) {
          this.customs = res.Data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  private sortByWordLength = (a: any) => {
    return a.name.length;
  };

  public removeItem(item: any) {
    this.customs = _.filter(this.customs, (elem) => elem != item);
    console.log("Remove: ", item.email);
  }
}
