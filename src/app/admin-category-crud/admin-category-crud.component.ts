import { CustomModel_ } from "./../IT-Ticket-ServiceModel/CustomModel_";
import { Component, OnInit } from "@angular/core";
import { Service } from "./../service";
import { Router } from "@angular/router";
import { clone } from "lodash";

@Component({
  moduleId: module.id,
  selector: "admin-category-crud",
  templateUrl: "./admin-category-crud.component.html",
  styleUrls: ["./admin-category-crud.component.css"],
})
export class AdminCategoryCrudComponent {
  customs: Array<CustomModel_> = new Array<CustomModel_>();
  Ticket_Category_Form: boolean = false;
  edit_Ticket_Category_Form: boolean = false;
  isNewform: boolean;
  newTicket_Category: any = {};
  editedTicket_Category: any = {};
  custom = new CustomModel_();
  Id = localStorage.getItem("id");
  constructor(private Service: Service, private router: Router) {
    Service.getTicketCategory()
      .then((res) => {
        if (res.Success) {
          this.customs = res.Data;

          this.custom.Created_By = this.Id;
          this.custom.Modified_By = this.Id;
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
    this.editedTicket_Category = clone(custom);
  }

  removeTicket_Category(custom: CustomModel_) {
    this.Service.DeleteTicket_Category(custom);
  }

  showAddTicket_CategoryForm() {
    if (this.customs.length) {
      this.newTicket_Category = {};
    }
    this.Ticket_Category_Form = true;
    this.isNewform = true;
  }

  saveTicket_Category(custom: CustomModel_) {
    if (this.isNewform) {
      this.newTicket_Category.Created_By = this.custom.Created_By;
      this.Service.AddTicket_Category(custom);
      console.log(this.newTicket_Category);
      console.log(custom);
    }
    this.Ticket_Category_Form = false;
  }

  cancelNewTicket_Category() {
    this.newTicket_Category = {};
    this.Ticket_Category_Form = false;
  }

  updateTicket_Category() {
    this.editedTicket_Category.Modified_By = this.custom.Modified_By;
    this.Service.UpdateTicket_Category(this.editedTicket_Category);
    console.log(this.newTicket_Category);
    console.log(this.custom);
    this.edit_Ticket_Category_Form = false;
    this.editedTicket_Category = {};
  }

  cancelEdits() {
    this.editedTicket_Category = {};
    this.edit_Ticket_Category_Form = false;
  }
}
