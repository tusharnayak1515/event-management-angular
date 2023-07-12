import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  public oldPassword:string = "";
  public newPassword:string = "";

  constructor(private employeeService: EmployeeService) {

  }

  ngOnInit(): void {
    
  }

  onPasswordChange() {
    if(this.oldPassword === this.employeeService.adminPassword) {
      this.employeeService.adminPassword = this.newPassword;
      this.oldPassword = "";
      this.newPassword = "";
      alert("Password Updated");
    }
    else {
      alert("Incorrect old password");
    }
  }

}
