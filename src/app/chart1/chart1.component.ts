import { TimeModel_ } from "../IT-Ticket-ServiceModel/TimeModel_";
import { CustomModel_ } from "./../IT-Ticket-ServiceModel/CustomModel_";
import { Router } from "@angular/router";
import { Service } from "./../service";
import { Component, OnInit } from "@angular/core";
import { ChartsModule, Color } from "ng2-charts";
import { BrowserModule } from "@angular/platform-browser";
import { NgForm } from "@angular/forms";
@Component({
  selector: "chart1",
  templateUrl: "./chart1.component.html",
  styleUrls: ["./chart1.component.css"],
})
export class Chart1Component {
  custom = new CustomModel_();
  time = new TimeModel_();
  newTime: any = {};
  public doughnutChartLabels: string[] = ["Opened Tickets", "Closed Tickets"];
  public doughnutChartData: any[] = [0, 0];
  public doughnutChartType: string = "doughnut";

  constructor(private Service: Service, private router: Router) {}

  ngOnInit() {
    this.Service.Graph()
      .then((res) => {
        if (res.Success) {
          let customs: Array<CustomModel_> = res.Data;
          let open_count: number = 0;
          let closed: number = 0;
          customs.forEach((cantidad) => {
            console.log(cantidad);
            if (cantidad.Ticket_Status == "Closed") {
              console.log(cantidad.Count);
              closed = cantidad.Count;
            } else {
              open_count = cantidad.Count;
            }
          });
          console.log(open_count, closed);
          let number: Array<number> = [open_count, closed];
          this.doughnutChartData = number;

          console.log(this.doughnutChartData);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  saveTime(time: TimeModel_) {
    this.Service.GraphwithTime(time)
      .then((res) => {
        if (res.Success) {
          let times: Array<TimeModel_> = res.Data;
          let open_count: number = 0;
          let closed: number = 0;
          times.forEach((cantidad) => {
            console.log(cantidad);
            if (cantidad.Ticket_Status == "Closed") {
              console.log(cantidad.Count);
              closed = cantidad.Count;
            } else {
              open_count = cantidad.Count;
            }
          });
          console.log(open_count, closed);
          let number: Array<number> = [open_count, closed];
          this.doughnutChartData = number;

          console.log(this.doughnutChartData);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(this.custom);
  }
}
