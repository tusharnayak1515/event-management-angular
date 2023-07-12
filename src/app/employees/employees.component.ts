import { Component, OnInit } from '@angular/core';
import Employee from '../models/Employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  public employees:Employee[] = [];
  public employeeModel = new Employee(1,"","","");

  constructor(private employeeService:EmployeeService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.employeeService.loadAllEmployees().subscribe((data:Employee[])=> {
      this.employees = data;
    })
  }

  onSubmit() {
    this.employeeService.addEmployee(this.employeeModel).subscribe((data:Employee)=> {
      this.employees.push(data);
    });
    this.employeeModel = new Employee(1,"","","");
  }

  onDetailsShow(id:number) {
    this.router.navigate([`employees`, id]);
  }

}
