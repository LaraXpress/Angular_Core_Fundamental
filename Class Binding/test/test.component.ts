import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h1>Welcome {{name}}</h1>
    <h2  class  ="text-special" [class]="successClass">Laravel Framework</h2>
    <h2 [class] ="successClass">Django Framework</h2>
    <h3 [class.text-danger]="hasError">Don't push your couple pics on social media!</h3>
    <h3 [ngClass] ="isMessages">Don't push your salary on social media!</h3>
  `,
  styles: [`
    .text-success{
      color:green;
    }
    .text-danger{
      color:red;
    }
    .text-special{
      font-style:italic
    }
  `]
})
export class TestComponent implements OnInit {

  public name : string = 'CodeVolution';
  public successClass = "text-success";
  public hasError  : boolean = true;
  public isSpecial : boolean = true;
  public isMessages : object = {
    "text-success" : this.hasError,
    "text-danger"  :  !this.hasError,
    "text-special" : !this.hasError
  }
  constructor() { }
  
  ngOnInit(): void {
  }

}
