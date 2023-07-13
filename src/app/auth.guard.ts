import {
  Router,
} from '@angular/router';
import { EmployeeService } from './employee.service';
import { inject } from '@angular/core';
import { tap } from 'rxjs';

export const authGuard = () => {
  const router = inject(Router);
  const employeeService: EmployeeService = inject(EmployeeService);
  return employeeService.getIsLoggedIn().pipe(
    tap((value) => {
      return !value ? router.navigate(['login']) : true;
    })
  );
};
