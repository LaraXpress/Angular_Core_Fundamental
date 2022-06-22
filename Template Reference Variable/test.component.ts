import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h1>Welcome {{name}}</h1>
    <input type="text" name="" id="" #myMsg>
    <input type="button" value="Submit"  (click)="submitMessage(myMsg.value);">
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name : string = 'Angular Core Fundamental';    
  
  constructor() { }
  
  ngOnInit(): void {
  }

  submitMessage(value:any){
    console.log(value);
    
  }

}
