import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
  }
  title = 'HRM';  
  registrationForm = new FormGroup({
    username          : new FormControl('mazedur'),
    email             : new FormControl(''),
    password          : new FormControl(''),
    c_password        : new FormControl(''),
    address : new FormGroup({
        city : new FormControl(''),
        state : new FormControl(''),
        postalCode : new FormControl('')
    })
  });
}

