import { Technician_Category_ } from "./../IT-Ticket-ServiceModel/Technician_Category_";
import { User_ } from "./../IT-Ticket-ServiceModel/User_";
import { Ticket_Category_ } from "./../IT-Ticket-ServiceModel/Ticket_Category_";
import { Component } from "@angular/core";
import { Service } from "./../service";
import { Router } from "@angular/router";
import { clone } from "lodash";
import { CustomModel_ } from "../IT-Ticket-ServiceModel/CustomModel_";

@Component({
  moduleId: module.id,
  selector: "admin-technician-category-crud",
  templateUrl: "./admin-technician-category-crud.component.html",
  styleUrls: ["./admin-technician-category-crud.component.css"],
})
export class AdminTechnicianCategoryCrudComponent {
  customs: Array<CustomModel_> = new Array<CustomModel_>();
  TechnicianForm: boolean = false;
  editTechnicianForm: boolean = false;
  isNewform: boolean;
  newTechnician: any = {};
  editedTechnician: any = {};
  Id = localStorage.getItem("id");
  custom = new CustomModel_();
  categories: Array<Ticket_Category_> = new Array<Ticket_Category_>();
  users: Array<User_> = new Array<User_>();
  user = new User_();
  category = new Ticket_Category_();
  Technician = new Technician_Category_();
  constructor(private Service: Service, private router: Router) {
    Service.getAdminCategory_TechnicianCRUD()
      .then((res) => {
        if (res.Success) {
          this.customs = res.Data;

          console.log(this.custom);

          this.custom.Created_By = this.Id;
          this.custom.Modified_By = this.Id;
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

    Service.getAllUsers()
      .then((res) => {
        if (res.Success) {
          this.users = res.Data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  showeditTechnicianForm(custom: CustomModel_) {
    if (!custom) {
      this.TechnicianForm = false;
      return;
    }
    this.editTechnicianForm = true;
    this.editedTechnician = clone(custom);
  }

  showAddTechnicianForm() {
    if (this.customs.length) {
      this.newTechnician = {};
    }
    this.TechnicianForm = true;
    this.isNewform = true;
  }

  saveTechnician(Technician: Technician_Category_) {
    if (this.isNewform) {
      this.newTechnician.Created_By = this.custom.Created_By;
      this.Service.Add_Technician_Category(Technician);
      console.log(this.newTechnician);
      console.log(Technician);
    }
    this.TechnicianForm = false;
  }

  cancelNewTechnician() {
    this.newTechnician = {};
    this.TechnicianForm = false;
  }

  updateTechnician() {
    this.editedTechnician.Modified_By = this.custom.Modified_By;
    this.Service.Update_Technician_Category(this.editedTechnician);
    console.log(this.newTechnician);
    console.log(this.Technician);
    this.editTechnicianForm = false;
    this.editedTechnician = {};
  }

  cancelEdits() {
    this.editedTechnician = {};
    this.editTechnicianForm = false;
  }

  removeTechnician(custom: CustomModel_) {
    this.Service.DeleteTechnician(custom);
  }
}
