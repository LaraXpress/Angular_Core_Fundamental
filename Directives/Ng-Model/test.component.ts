import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h1 *ngIf="true">Welcome {{name}}</h1>
    <input type="text" [(ngModel)]="username">    
    {{username}}
    <hr>    
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name : string = 'Angular Core Fundamental';    
  public username : string = "";
    
  constructor() { }
  
  ngOnInit(): void {
  }  
}
