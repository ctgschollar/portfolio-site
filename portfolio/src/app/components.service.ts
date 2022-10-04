import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  constructor() { }

  getComponents() {
    return [
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

}