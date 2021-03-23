import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prac-three',
  templateUrl: './prac-three.component.html',
  styleUrls: ['./prac-three.component.css']
})
export class PracThreeComponent implements OnInit {

  showParagraph = false;
  logs: Date [] = [];

  toggleParagraph() {
    this.showParagraph = !this.showParagraph;
    this.logs.push(new Date());
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
