import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  constructor() { }

  getComponents() {
    return [
      {
        name:"splash", //SplashComponent
        height:"800px",
        cls:"terminal-dark"
      },
      {
        name:"book", //BannerComponent
        height:"100px",
        cls:"bookend"
      },
      {
        name:"services", //GridComponent
        height:"800px",
        cls:"terminal-light"
      },
      {
        name:"tools", //BannerComponent
        height:"100px",
        cls:"bookend"
      },
      {
        name:"portfolio", //GridComponent
        height:"800px",
        cls:"terminal-dark",
      },
      {
        name:"contact", //BannerComponent
        height:"100px",
        cls:"bookend"
      }
    ];
  }

}