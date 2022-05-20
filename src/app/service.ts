import { TimeModel_ } from "./IT-Ticket-ServiceModel/TimeModel_";
import { ResponseMessage } from "./IT-Ticket-ServiceModel/ResponseMessage";
import { Technician_Category_ } from "./IT-Ticket-ServiceModel/Technician_Category_";
import { Ticket_Category_ } from "./IT-Ticket-ServiceModel/Ticket_Category_";
import { Rol_ } from "./IT-Ticket-ServiceModel/Rol_";
import { Ticket_Status_ } from "./IT-Ticket-ServiceModel/Ticket_Status_";
import { Ticket_ } from "./IT-Ticket-ServiceModel/Ticket_";
import { User_ } from "./IT-Ticket-ServiceModel/User_";
import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import "rxjs/Rx";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import { Router } from "@angular/router";
import { CustomModel_ } from "./IT-Ticket-ServiceModel/CustomModel_";
import { Message } from "./IT-Ticket-ServiceModel/Message";
@Injectable()
export class Service {
  public token: string = "Bearer " + localStorage.getItem("token");

  constructor(private http: Http, private router: Router) {}

  //login
  logIn(user: User_): Promise<ResponseMessage> {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    let option = new RequestOptions({ headers: headers });
    var url = "http://localhost:6475/api/User_/LogIn";
    return this.http
      .post(url, user, option)
      .toPromise()
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }

  //Admin uses this function
  getAdminCategory_TechnicianCRUD(): Promise<ResponseMessage> {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.token);
    let body = "";
    let option = new RequestOptions({ headers: headers });
    var url = "http://localhost:6475/api/Technician_Category_/TechSelect";
    return this.http
      .post(url, body, option)
      .toPromise()
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }
  //Admin uses this function
  getAllUsers(): Promise<ResponseMessage> {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.token);
    let body = "";
    let option = new RequestOptions({ headers: headers });
    var url = "http://localhost:6475/api/User_/getAllUsers";
    return this.http
      .post(url, body, option)
      .toPromise()
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }
  //*****Ticket and Admin uses this function*****
  getTicketCategory(): Promise<ResponseMessage> {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.token);
    let body = "";
    let option = new RequestOptions({ headers: headers });
    var url = "http://localhost:6475/api/Category_/Select_with_DateStatus";
    return this.http
      .post(url, body, option)
      .toPromise()
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }
  //*****Ticket uses this function*****
  getTechnicianUserid(
    technician: Technician_Category_
  ): Promise<ResponseMessage> {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.token);
    let option = new RequestOptions({ headers: headers });
    var url = "http://localhost:6475/api/Technician_Category_/ThisTicketTech";
    return this.http
      .post(url, technician, option)
      .toPromise()
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }
  //*****Admin uses this function*****
  getUsers(): Promise<ResponseMessage> {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.token);
    let body = "";
    let option = new RequestOptions({ headers: headers });
    var url = "http://localhost:6475/api/User_/Select_with_timedata";
    return this.http
      .post(url, body, option)
      .toPromise()
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }
  //*****Admin uses this function*****
  DeleteUser(custom: CustomModel_): Promise<ResponseMessage> {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.token);
    let option = new RequestOptions({ headers: headers });
    var url = "http://localhost:6475/api/User_/Delete_user";
    return this.http
      .post(url, custom, option)
      .toPromise()
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }
  //*****Admin uses this function*****
  AddUser(custom: CustomModel_): Promise<ResponseMessage> {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.token);
    let option = new RequestOptions({ headers: headers });
    var url = "http://localhost:6475/api/User_/Add_User";
    return this.http
      .post(url, custom, option)
      .toPromise()
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }
  //*****Admin uses this function*****
  Update_User_Created_By(custom: CustomModel_): Promise<ResponseMessage> {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.token);
    let option = new RequestOptions({ headers: headers });
    var url = "http://localhost:6475/api/User_/Add_User";
    return this.http
      .post(url, custom, option)
      .toPromise()
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }
  //*****Admin uses this function*****
  UpdateUser(user: User_): Promise<ResponseMessage> {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.token);
    let option = new RequestOptions({ headers: headers });
    var url = "http://localhost:6475/api/User_/Update_user";
    return this.http
      .post(url, user, option)
      .toPromise()
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }
  //*****Admin uses this function*****
  DeleteTicket_Category(custom: CustomModel_): Promise<ResponseMessage> {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.token);
    let option = new RequestOptions({ headers: headers });
    var url = "http://localhost:6475/api/Category_/DeleteCategory";
    return this.http
      .post(url, custom, option)
      .toPromise()
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }
  //*****Admin uses this function*****
  Add_Technician_Category(
    Technician: Technician_Category_
  ): Promise<ResponseMessage> {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.token);
    let option = new RequestOptions({ headers: headers });
    var url =
      "http://localhost:6475/api/Technician_Category_/Add_Technician_Category";
    return this.http
      .post(url, Technician, option)
      .toPromise()
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }

  //*****Admin uses this function*****
  Update_Technician_Category(
    Technician: Technician_Category_
  ): Promise<ResponseMessage> {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.token);
    let option = new RequestOptions({ headers: headers });
    var url =
      "http://localhost:6475/api/Technician_Category_/Update_Technician_Category";
    return this.http
      .post(url, Technician, option)
      .toPromise()
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }
  //*****Ticket uses this function*****
  AddTicket(custom: CustomModel_): Promise<ResponseMessage> {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.token);
    let option = new RequestOptions({ headers: headers });
    var url = "http://localhost:6475/api/Ticket_/AddTicket";
    return this.http
      .post(url, custom, option)
      .toPromise()
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }
  //*****Admin uses this function*****/
  UpdateTicket_Category(custom: CustomModel_): Promise<ResponseMessage> {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.token);
    let option = new RequestOptions({ headers: headers });
    var url = "http://localhost:6475/api/Category_/UpdateCategory";
    return this.http
      .post(url, custom, option)
      .toPromise()
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }
  //*****Admin uses this function*****/
  AddTicket_Category(custom: CustomModel_): Promise<ResponseMessage> {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.token);
    let option = new RequestOptions({ headers: headers });
    var url = "http://localhost:6475/api/Category_/AddCategory";
    return this.http
      .post(url, custom, option)
      .toPromise()
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }
  //*****Admin uses this function*****
  SelectRol(): Promise<ResponseMessage> {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.token);
    let body = "";
    let option = new RequestOptions({ headers: headers });
    var url = "http://localhost:6475/api/Rol_/Select_Rol";
    return this.http
      .post(url, body, option)
      .toPromise()
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }
  //*****Ticket uses this function*****
  forticket(): Promise<ResponseMessage> {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.token);
    let body = "";
    let option = new RequestOptions({ headers: headers });
    var url = "http://localhost:6475/api/Category_/forticket";
    return this.http
      .post(url, body, option)
      .toPromise()
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }
  //*****Ticket uses this function*****
  ticketstatus(): Promise<ResponseMessage> {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.token);
    let body = "";
    let option = new RequestOptions({ headers: headers });
    var url = "http://localhost:6475/api/Ticket_Status_/Select_with_timedata";
    return this.http
      .post(url, body, option)
      .toPromise()
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }
  //*****Ticket uses this function*****
  GetTechnician(custom: CustomModel_): Promise<ResponseMessage> {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.token);
    let option = new RequestOptions({ headers: headers });
    var url = "http://localhost:6475/api/Ticket_/GetTech";
    return this.http
      .post(url, custom, option)
      .toPromise()
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }
  //*****Admin uses this function*****
  DeleteTechnician(custom: CustomModel_): Promise<ResponseMessage> {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.token);
    let option = new RequestOptions({ headers: headers });
    var url =
      "http://localhost:6475/api/Technician_Category_/Delete_Technician_Category";
    return this.http
      .post(url, custom, option)
      .toPromise()
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }

  AddMessage(message: Message): Promise<ResponseMessage> {
    //pregunta
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.token);
    let option = new RequestOptions({ headers: headers });
    var url = "http://localhost:55582/api/Message/addMessage";
    return this.http
      .post(url, message, option)
      .toPromise()
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }
  DeleteMessage(message: Message): Promise<ResponseMessage> {
    //pregunta
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.token);
    let option = new RequestOptions({ headers: headers });
    var url = "http://localhost:55582/api/Message/deleteMessage";
    return this.http
      .post(url, message, option)
      .toPromise()
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }

  Admintickets(): Promise<ResponseMessage> {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.token);
    let body = "";
    let option = new RequestOptions({ headers: headers });
    var url = "http://localhost:6475/api/Ticket_/Select_With_All_Info_Ticket";
    return this.http
      .post(url, body, option)
      .toPromise()
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }

  TicketDelete(ticket: Ticket_): Promise<ResponseMessage> {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.token);
    let option = new RequestOptions({ headers: headers });
    var url = "http://localhost:6475/api/Ticket_/Delete";
    return this.http
      .post(url, ticket, option)
      .toPromise()
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }

  SpecificTicket(user: User_): Promise<ResponseMessage> {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.token);
    let option = new RequestOptions({ headers: headers });
    var url = "http://localhost:6475/api/Ticket_/specificTicket";
    return this.http
      .post(url, user, option)
      .toPromise()
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }

  SpecificTicketTechnician(user: User_): Promise<ResponseMessage> {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.token);
    let option = new RequestOptions({ headers: headers });
    var url = "http://localhost:6475/api/Ticket_/specificTicketTechnician";
    return this.http
      .post(url, user, option)
      .toPromise()
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }

  TicketUpdateTech(custom: CustomModel_): Promise<ResponseMessage> {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.token);
    let option = new RequestOptions({ headers: headers });
    var url = "http://localhost:6475/api/Ticket_/TicketUpdateTech";
    return this.http
      .post(url, custom, option)
      .toPromise()
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }

  TicketUpdateAdmin(custom: CustomModel_): Promise<ResponseMessage> {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.token);
    let option = new RequestOptions({ headers: headers });
    var url = "http://localhost:6475/api/Ticket_/TicketUpdateAdmin";
    return this.http
      .post(url, custom, option)
      .toPromise()
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }

  UpdateModified_By(custom: CustomModel_): Promise<ResponseMessage> {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.token);
    let option = new RequestOptions({ headers: headers });
    var url = "http://localhost:6475/api/Ticket_/TicketUpdateModified_By";
    return this.http
      .post(url, custom, option)
      .toPromise()
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }

  Graph(): Promise<ResponseMessage> {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.token);
    let body = "";
    let option = new RequestOptions({ headers: headers });
    var url = "http://localhost:6475/api/Ticket_/Graph";
    return this.http
      .post(url, body, option)
      .toPromise()
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }

  GraphwithTime(time: TimeModel_): Promise<ResponseMessage> {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.token);
    //let body = '';
    let option = new RequestOptions({ headers: headers });
    var url = "http://localhost:6475/api/Ticket_/GraphwithTime";
    return this.http
      .post(url, time, option)
      .toPromise()
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }
}
