import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div [ngSwitch]="color">
        <div *ngSwitchCase="'red'">You picked the RED Color</div>        
        <div *ngSwitchCase="'green'">You picked the GREEN Color</div>        
        <div *ngSwitchCase="'blue'">You picked the BLUE Color</div>        
        <div *ngSwitchDefault>Please Try Again to pick up Color</div>        
    </div>
    `,
  styles: []
})
export class TestComponent implements OnInit {

  public name : string = 'Angular Core Fundamental';    
  public color : string = "red";  
  constructor() { }
  
  ngOnInit(): void {
  }  

}
