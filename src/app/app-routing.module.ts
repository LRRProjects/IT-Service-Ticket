import { TechdashboardComponent } from "./techdashboard/techdashboard.component";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { AdminUserCRUDComponent } from "./admin-user-crud/admin-user-crud.component";
import { AdminTechnicianCategoryCrudComponent } from "./admin-technician-category-crud/admin-technician-category-crud.component";
import { AdminCategoryCrudComponent } from "./admin-category-crud/admin-category-crud.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TicketFormComponent } from "./ticket-form/ticket-form.component";
import { AuthGuard } from "./guards/authguard";
import { LoginComponent } from "./login/login.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "dashboard",
    component: UserDashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "createticket",
    component: TicketFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "techdashboard",
    component: TechdashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "admindashboard",
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "adminusercrud",
    component: AdminUserCRUDComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "managecategory",
    component: AdminCategoryCrudComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "managetechnician",
    component: AdminTechnicianCategoryCrudComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
