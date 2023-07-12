import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import Employee from './models/Employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  public adminEmail: string = 'admin@gmail.com';
  public adminPassword: string = 'Test123@';
  public employees: Employee[] = [];
  public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<any>(localStorage.getItem("admin") ? true : false);

  constructor(private http: HttpClient) {}

  public loadAllEmployees = (): Observable<Employee[]> => {
    return this.http
      .get<Employee[]>('http://localhost:3000/employees');
  };

  public addEmployee = (employee: Employee): Observable<Employee> => {
    return this.http
      .post<Employee>('http://localhost:3000/employees', employee);
  };

  public getEmployee = (id:number):Observable<Employee>=> {
    return this.http
      .get<Employee>(`http://localhost:3000/employees/${id}`);
  }

  public deleteEmployee = (id:number):Observable<Employee>=> {
    return this.http
      .delete<Employee>(`http://localhost:3000/employees/${id}`);
  }

  public updateEmployee = (employee:Employee):Observable<Employee>=> {
    return this.http
      .put<Employee>(`http://localhost:3000/employees/${employee.id}`, employee);
  }

  public setIsLoggedIn(value: boolean): void {
    this.isLoggedIn.next(value);
  }

  public getIsLoggedIn(): Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }
}
