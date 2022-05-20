import { Ticket_Category_ } from "../IT-Ticket-ServiceModel/Ticket_Category_";
import { User_ } from "./../IT-Ticket-ServiceModel/User_";
import { clone } from "lodash";
import { Component, OnInit } from "@angular/core";
import { CustomModel_ } from "../IT-Ticket-ServiceModel/CustomModel_";
import { Router } from "@angular/router";
import { Service } from "./../service";
import { Ticket_ } from "./../IT-Ticket-ServiceModel/Ticket_";
import { Ticket_Status_ } from "../IT-Ticket-ServiceModel/Ticket_Status_";

@Component({
  moduleId: module.id,
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.css"],
})
export class AdminDashboardComponent {
  user = new User_();
  users: Array<User_> = new Array<User_>();
  customs: Array<CustomModel_> = new Array<CustomModel_>();
  custom = new CustomModel_();
  categories: Array<Ticket_Category_> = new Array<Ticket_Category_>();
  statuses: Array<Ticket_Status_> = new Array<Ticket_Status_>();
  Ticket_Category_Form: boolean = false;
  Id = localStorage.getItem("id");
  edit_Ticket_Category_Form: boolean = false;
  editedTicket_Category: any = {};

  constructor(private Service: Service, private router: Router) {
    if (localStorage.getItem("rol") == "3") {
      this.user.Id = localStorage.getItem("id");
    }

    Service.SpecificTicketTechnician(this.user)
      .then((res) => {
        if (res.Success) {
          this.customs = res.Data;
          console.log(this.customs);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    Service.ticketstatus()
      .then((res) => {
        if (res.Success) {
          this.statuses = res.Data;
          console.log(this.statuses);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    Service.getTicketCategory()
      .then((res) => {
        if (res.Success) {
          this.categories = res.Data;
          console.log(this.categories);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    Service.TicketUpdateTech(this.custom)
      .then((res) => {
        if (res.Success) {
        }
      })
      .catch((error) => {
        console.log(error);
      });

    Service.Admintickets()
      .then((res) => {
        if (res.Success) {
          this.customs = res.Data;
          console.log(this.customs);
          this.custom.Modified_By = this.Id;
          console.log(this.custom);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    Service.getAllUsers()
      .then((res) => {
        if (res.Success) {
          this.users = res.Data;
          console.log(this.customs);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  cancelEdits() {
    this.editedTicket_Category = {};
    this.edit_Ticket_Category_Form = false;
  }

  showedit_Ticket_Category_Form(custom: CustomModel_) {
    if (!custom) {
      this.Ticket_Category_Form = false;
      return;
    }
    this.edit_Ticket_Category_Form = true;
    this.editedTicket_Category = clone(custom);
  }

  removeUser(ticket: Ticket_) {
    this.Service.TicketDelete(ticket);
  }

  updateTicket() {
    this.editedTicket_Category.Modified_By = this.custom.Modified_By;
    this.Service.TicketUpdateAdmin(this.editedTicket_Category);
    console.log(this.editedTicket_Category);
    console.log(this.custom);

    this.edit_Ticket_Category_Form = false;
    this.editedTicket_Category = {};
  }
}
