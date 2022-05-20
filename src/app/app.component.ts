import { User_ } from "./IT-Ticket-ServiceModel/User_";
import { Component } from "@angular/core";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Service } from "./service";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
@Component({
  moduleId: module.id,
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title: string;

  constructor(private Service: Service) {}
}
