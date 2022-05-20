import { Http, Response } from "@angular/http";
import "rxjs/Rx";
import { For_Ticket_ } from "../IT-Ticket-ServiceModel/For_Ticket_";
import { CustomModel_ } from "../IT-Ticket-ServiceModel/CustomModel_";
import {
  provideRouterInitializer,
  routerNgProbeToken,
} from "@angular/router/src/router_module";
import { Service } from "./../service";
import { Component, OnInit, Provider } from "@angular/core";
import { Router } from "@angular/router";
import { clone } from "lodash";
import { Ticket_Category_ } from "../IT-Ticket-ServiceModel/Ticket_Category_";
import { FormGroup, FormBuilder, Validators, NgForm } from "@angular/forms";
import "rxjs/add/operator/filter";
import { User_ } from "../IT-Ticket-ServiceModel/User_";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Observable } from "rxjs/Observable";

@Component({
  moduleId: module.id,
  selector: "ticket-form",
  templateUrl: "./ticket-form.component.html",
  styleUrls: ["./ticket-form.component.css"],
})
export class TicketFormComponent {
  customs: Array<CustomModel_> = new Array<CustomModel_>();
  custom = new CustomModel_();
  ticketForm: boolean = false;
  editTicketForm: boolean = false;
  isNewform: boolean;
  newTicket: any = {};
  editedTicket: any = {};
  users: Array<User_> = new Array<User_>();
  show_message = false;
  showform_technician = false;
  user = new User_();

  Ticket_Category_id: number;
  User_id: number;
  id = localStorage.getItem("id");
  Name = localStorage.getItem("users_name");
  Lastname = localStorage.getItem("users_lastname");
  Created_By: number;
  TechName: string;

  constructor(private Service: Service, private router: Router) {
    Service.forticket()
      .then((res) => {
        if (res.Success) {
          this.customs = res.Data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  showeditTicketform(custom: CustomModel_) {
    if (!custom) {
      this.ticketForm = true;
      return;
    }
    this.editTicketForm = true;
    this.editedTicket = clone(custom);
  }

  showAddTicketForm() {
    if (this.customs.length) {
      this.newTicket = {};
    }
    this.ticketForm = true;
    this.isNewform = true;
  }

  cancelNewTicket() {
    this.newTicket = {};
    this.ticketForm = false;
  }

  categoryChange(ticket_category_id: number) {
    this.custom.Ticket_Category_id = ticket_category_id;

    this.showform_technician = true;
    this.getAllUsers();
  }

  getAllUsers() {
    this.Service.GetTechnician(this.custom)
      .then((res) => {
        if (res.Success) {
          this.custom = res.Data;
          console.log(this.custom);
          this.Ticket_Category_id = this.custom.Ticket_Category_id;
          this.User_id = this.custom.User_id;
          this.TechName = this.custom.TechName;
          console.log(this.TechName);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  AddTicket(TicketSubmit: NgForm) {
    this.custom = TicketSubmit.value;
    console.log(this.custom);

    this.SubmitTicket();
    TicketSubmit.reset();
    this.cancelNewTicket();
  }

  SubmitTicket() {
    this.Service.AddTicket(this.custom)
      .then((res) => {
        if (res.Success) {
        }
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(this.custom);
  }
}
