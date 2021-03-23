import { Component } from '@angular/core';

@Component({
  selector: 'app-prac-two',
  templateUrl: './prac-two.component.html',
  styleUrls: ['./prac-two.component.css']
})
export class PracTwoComponent {

  username = '';
  usernameCreated = false;
  constructor() {
  }


  createUsername() {
    this.usernameCreated = true;
  }
}
