import { Component, OnInit } from '@angular/core';
import Employee from '../models/Employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public employee!: Employee;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.employeeService.getEmployee(+params["id"]).subscribe((data:Employee)=> {
        this.employee = data;
      })
    });

  }

  onEmployeeDelete(id:number) {
    this.employeeService.deleteEmployee(id).subscribe();
    this.router.navigate([`employees`]);
  }

  onEmployeeUpdate() {
    this.employeeService.updateEmployee(this.employee).subscribe((data:Employee)=> {
      console.log(`Employee updated: ${data}`);
    });
  }
}
