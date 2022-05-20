import { NgForm } from "@angular/forms";
import { CustomModel_ } from "./../IT-Ticket-ServiceModel/CustomModel_";
import { Service } from "./../service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { clone } from "lodash";
import { Rol_ } from "../IT-Ticket-ServiceModel/Rol_";

@Component({
  moduleId: module.id,
  selector: "admin-user-crud",
  templateUrl: "./admin-user-crud.component.html",
  styleUrls: ["./admin-user-crud.component.css"],
})
export class AdminUserCRUDComponent {
  customs: Array<CustomModel_> = new Array<CustomModel_>();
  userForm: boolean = false;
  editUserForm: boolean = false;
  isNewform: boolean;
  newUser: any = {};
  editedUser: any = {};
  custom = new CustomModel_();
  Id = localStorage.getItem("id");
  image = "background1";

  rols: Array<Rol_> = new Array<Rol_>();
  rol = new Rol_();

  Name: string;
  Lastname: string;
  Username: string;
  Password: number;
  Rol_id: number;
  Active: boolean;
  Created_By: number;

  constructor(private Service: Service, private router: Router) {
    Service.getUsers()
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

    Service.SelectRol()
      .then((res) => {
        if (res.Success) {
          this.rols = res.Data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  showeditUserform(custom: CustomModel_) {
    if (!custom) {
      this.userForm = false;
      return;
    }
    this.editUserForm = true;
    this.editedUser = clone(custom);
  }

  removeUser(custom: CustomModel_) {
    this.Service.DeleteUser(custom);
  }

  showAddUserForm() {
    if (this.rols.length) {
      this.newUser = {};
    }
    this.userForm = true;
    this.isNewform = true;
  }

  saveUser(custom: CustomModel_) {
    if (this.isNewform) {
      this.newUser.Created_By = this.custom.Created_By; //
      this.Service.AddUser(custom);
      console.log(this.newUser); //
      console.log(custom);
    }
    this.userForm = false;
  }

  cancelNewUser() {
    this.newUser = {};
    this.userForm = false;
  }

  updateUser() {
    this.editedUser.Modified_By = this.custom.Modified_By;
    this.Service.UpdateUser(this.editedUser);
    console.log(this.editedUser); //
    console.log(this.custom);
    this.editUserForm = false;
    this.editedUser = {};
  }

  cancelEdits() {
    this.editedUser = {};
    this.editUserForm = false;
  }

  AddTicket(TicketSubmit: NgForm) {
    this.custom = TicketSubmit.value;
    console.log(this.custom);

    this.SubmitTicket();
    TicketSubmit.reset();
    this.cancelNewUser();
  }

  SubmitTicket() {
    this.Service.AddUser(this.custom)
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
