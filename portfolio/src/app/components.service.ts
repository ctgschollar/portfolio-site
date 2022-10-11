import { Injectable } from '@angular/core';
import { Item } from './common/component';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  components: Item[];

  constructor() {
    this.components= [
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
        cls:"terminal-light",
        navigable:true
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
        navigable:true
      },
      {
        name:"contact", //BannerComponent
        type:"banner",
        height:"100px",
        cls:"bookend",
        navigable:true
      }
    ];
  }

  getNavComponents() {
    return this.components.filter(c => c.navigable);
  }

  getComponents(): Item[] {
    return this.components;
  }

}