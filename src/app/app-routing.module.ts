import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/employees",
    pathMatch: "full"
  },
  {
    path: "employees",
    component: EmployeesComponent,
    canActivate: [authGuard]
  },
  {
    path: "employees/:id",
    component: EmployeeComponent,
    canActivate: [authGuard]
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "change-password",
    component: ChangepasswordComponent,
    canActivate: [authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
