import { AppRoutingModule } from "./app-routing.module";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { APP_BASE_HREF } from "@angular/common";
import { AppComponent } from "./app.component";
import { TicketFormComponent } from "./ticket-form/ticket-form.component";
import { LoginComponent } from "./login/login.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule } from "@angular/router";
import { Service } from "./service";
import { CommonModule } from "@angular/common";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { AuthGuard } from "./guards/authguard";
import { ChartsModule } from "ng2-charts";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxPaginationModule } from "ngx-pagination";
import { AdminUserCRUDComponent } from "./admin-user-crud/admin-user-crud.component";
import { AdminCategoryCrudComponent } from "./admin-category-crud/admin-category-crud.component";
import { AdminTechnicianCategoryCrudComponent } from "./admin-technician-category-crud/admin-technician-category-crud.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { TechdashboardComponent } from "./techdashboard/techdashboard.component";
import { Chart1Component } from "./chart1/chart1.component";
import { PaginationComponent } from "./pagination/pagination.component";

@NgModule({
  declarations: [
    AppComponent,
    TicketFormComponent,
    LoginComponent,
    NavbarComponent,

    UserDashboardComponent,

    AdminUserCRUDComponent,

    AdminCategoryCrudComponent,

    AdminTechnicianCategoryCrudComponent,

    AdminDashboardComponent,

    TechdashboardComponent,

    Chart1Component,

    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    ChartsModule,
    NgxPaginationModule,
  ],
  providers: [Service, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
