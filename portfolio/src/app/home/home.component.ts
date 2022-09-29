import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  components: {
    name: string,
    height:string
    cls:string
  } [];

  constructor() {
    this.components = [
      {
        name:"hook",
        height:"800px",
        cls:"terminal-dark"
      },
      {
        name:"book",
        height:"100px",
        cls:"bookend"
      },
      {
        name:"services",
        height:"800px",
        cls:"terminal-light"
      },
      {
        name:"tools",
        height:"100px",
        cls:"bookend"
      },
      {
        name:"portfolio",
        height:"800px",
        cls:"terminal-dark",
      },
      {
        name:"contact",
        height:"100px",
        cls:"bookend"
      }
    ];
  }

  ngOnInit(): void {
  }

}
