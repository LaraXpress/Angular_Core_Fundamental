import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
    <h1>Employee List : </h1>
    <h2>{{errorMsg}}</h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.name}}</li>
    </ul>    
    <hr>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  public employees : any = [];
  public errorMsg = '';

  constructor(private _employeeService : EmployeeService) { }

  ngOnInit():void {
      this._employeeService.getEmployees()
            .subscribe(data => this.employees = data,
            error => this.errorMsg = error);
  }

}
