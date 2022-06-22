import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div *ngFor="let food of foods">
        <h3>{{food}}</h3>
    </div>
    <hr>
    <div *ngFor="let color of colors; first as f">
        <h3>{{f}}-{{color}}</h3>
    </div>
    <hr>
    <div *ngFor="let color of colors; last as l">
        <h3>{{l}}-{{color}}</h3>
    </div>
    <hr>
    <div *ngFor="let color of colors; index as i">
        <h3>{{i}}-{{color}}</h3>
    </div>
    <hr>
    <div *ngFor="let color of colors; odd as o">
        <h3>{{o}}-{{color}}</h3>
    </div>
    <hr>
    <div *ngFor="let color of colors; even as e">
        <h3>{{e}}-{{color}}</h3>
    </div>
    `,

  styles: []
  
})

export class TestComponent implements OnInit {

  public name : string = 'Angular Core Fundamental';    
  public foods : string[] = ['apple','mango','orange','banana'];
  public colors : string[] = ['red','green','blue','orange'];

  constructor() { }
  
  ngOnInit(): void {
  }  

}
