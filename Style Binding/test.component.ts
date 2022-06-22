import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h1>Welcome {{name}}</h1>
    <h2 [style.color]="'blue'">University of Dhaka</h2>
    <h2 [style.color]="hasError? 'red' : 'orange' ">Dhaka, Bangladesh</h2>
    <h3 [style.color]="favouriteColor">Department : ISRT, Applied Statiscs</h3>
    <p [ngStyle]="ContentStyle">Lorem ipsum dolor sit amet.</p>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name : string = 'Angular Core Fundamental';
  public hasError  : boolean = false;
  public favouriteColor : string = "aqua";
  public ContentStyle : object = {
      color : "green",    
      fontStyle : "italic"
  }
  constructor() { }
  
  ngOnInit(): void {
  }

}
