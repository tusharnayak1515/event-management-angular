import { Component, OnInit } from '@angular/core';
import Employee from '../models/Employee';
import { EmployeeService } from '../employee.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email:string = "";
  public password:string = "";

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    
  }

  onLogin() {
    if(this.email === this.employeeService.adminEmail && this.password === this.employeeService.adminPassword) {
      localStorage.setItem("admin", this.email);
      this.email = "";
      this.password = "";
      this.router.navigate(['employees']);
      this.employeeService.setIsLoggedIn(true);
    }
    else {
      this.employeeService.setIsLoggedIn(false);
      alert("Incorrect credentials");
    }
  }

}
