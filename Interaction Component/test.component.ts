import { Component, OnInit, NgModule, Input, EventEmitter, Output, } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `             
        <h1>{{'Hello '+ parentData}}</h1>
        <button (click)="sentEvent();">Sent Event</button>        
    `,

  styles: []

})

export class TestComponent implements OnInit {

  @Input('parentData') public username : any;
  @Input() public parentData : any;
  
  @Output() public childEvent = new EventEmitter();
  constructor() { }
  
  ngOnInit(): void {
  }  

  sentEvent(){
      this.childEvent.emit('Need Money for a job!');
  }
}
