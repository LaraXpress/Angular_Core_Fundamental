import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h1>Welcome {{name}}</h1>
    <button (click)="onClick($event)">Type</button>
    {{type}}
    <hr>
    <button (click)="message='Welcome to Bangladesh'">Message</button>
    {{message}}
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name : string = 'Angular Core Fundamental';
  public type : string = "";
  public message : string = "";

  onClick(event : any){
    console.log(event);    
    this.type = "Welcome to Angular Framework from Bangladesh";
    //this.type = event.type;    
  }
  
  constructor() { }
  
  ngOnInit(): void {
  }

}
