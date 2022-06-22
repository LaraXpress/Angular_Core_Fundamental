import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h1 *ngIf="true">Welcome {{name}}</h1>    
    <hr>
    <p *ngIf="contentBlock else elseBlock">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, deserunt.</p>
    <ng-template #elseBlock>
      <p>Content is protected!</p>
    </ng-template>
    <hr>
    <div *ngIf="language; then thenBlock else elseBlock"></div>
    <ng-template #thenBlock>
        <h2>Welcome to React Framework from  FACEBOOK</h2>
    </ng-template>
    <ng-template #elseBlock>
        <h2>Welcome to Angular Framework from  Google & Angular</h2>
    </ng-template>    
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name : string = 'Angular Core Fundamental';        
  public contentBlock : boolean = true;
  public language = false;  
  
  constructor() { }
  
  ngOnInit(): void {
  }  
}
