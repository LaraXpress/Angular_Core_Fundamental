import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  template: `
    <h2>All Employees Information : </h2> 
    <h2>{{errorMsg}}</h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.id}} - {{employee.name}} - {{employee.age}}</li>
    </ul>       
  `,
  styles: ['']
})
export class EmployeeDetailsComponent implements OnInit {

  public employees: any = [];
  public errorMsg = '';

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(data => this.employees = data,
        error => this.errorMsg = error);
  }


}
