import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isUser:boolean = false;

  constructor(private employeeService:EmployeeService, private router:Router) {
    
  }

  ngOnInit(): void {
    this.employeeService.getIsLoggedIn().subscribe((value:boolean) => {
      this.isUser = value;
    });
  }

  logoutUser() {
    localStorage.removeItem("admin");
    this.employeeService.setIsLoggedIn(false);
    this.router.navigate(['login']);
  }

}
