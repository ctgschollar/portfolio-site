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
        type:"splash",
        height:"800px",
        cls:"terminal-dark"
      },
      {
        name:"book", //BannerComponent
        type:"banner",
        height:"100px",
        cls:"bookend",
        blockWidth:12
      },
      {
        name:"services", //GridComponent
        type:"grid",
        height:"800px",
        cls:"terminal-light"
      },
      {
        name:"tools", //BannerComponent
        type:"grid",
        height:"100px",
        cls:"bookend",
        blockWidth:2
      },
      {
        name:"portfolio", //GridComponent
        type:"grid",
        height:"800px",
        cls:"terminal-dark",
      },
      {
        name:"contact", //BannerComponent
        type:"banner",
        height:"100px",
        cls:"bookend"
      }
    ];
  }

}