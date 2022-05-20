import { NgForm } from "@angular/forms/src/directives";
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
  selector: "app-techdashboard",
  templateUrl: "./techdashboard.component.html",
  styleUrls: ["./techdashboard.component.css"],
})
export class TechdashboardComponent {
  user = new User_();
  customs: Array<CustomModel_> = new Array<CustomModel_>();
  custom = new CustomModel_();
  categories: Array<Ticket_Category_> = new Array<Ticket_Category_>();
  statuses: Array<Ticket_Status_> = new Array<Ticket_Status_>();
  Ticket_Category_Form: boolean = false;
  Id = localStorage.getItem("id");
  Name = localStorage.getItem("users_name");
  Lastname = localStorage.getItem("users_lastname");
  edit_Ticket_Category_Form: boolean = false;
  editedTechnician_Tickets: any = {};

  constructor(private Service: Service, private router: Router) {
    if (localStorage.getItem("rol") == "3") {
      this.user.Id = localStorage.getItem("id");
      this.custom.Modified_By = this.Id;
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
  }

  showedit_Ticket_Category_Form(custom: CustomModel_) {
    if (!custom) {
      this.Ticket_Category_Form = false;
      return;
    }
    this.edit_Ticket_Category_Form = true;
    this.editedTechnician_Tickets = clone(custom);
  }

  cancelEdits() {
    this.editedTechnician_Tickets = {};
    this.edit_Ticket_Category_Form = false;
  }

  updateTicket() {
    this.editedTechnician_Tickets.Modified_By = this.custom.Modified_By;
    this.Service.TicketUpdateTech(this.editedTechnician_Tickets);
    console.log(this.editedTechnician_Tickets);
    console.log(this.custom);
    this.edit_Ticket_Category_Form = false;
    this.editedTechnician_Tickets = {};
  }
}
