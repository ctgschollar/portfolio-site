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
        cls:"bg-secondary text-primary min-vh-75",
      },
      {
        name:"book", //BannerComponent
        type:"banner",
        height:"100px",
        cls:"bg-info text-secondary min-vh-10",
        blockWidth:12
      },
      {
        name:"services", //GridComponent
        type:"grid",
        height:"800px",
        cls:"bg-primary text-secondary",
        navigable:true
      },
      {
        name:"tools", //BannerComponent
        type:"icons",
        height:"100px",
        cls:"bg-info text-secondary",
        blockWidth:2
      },
      {
        name:"portfolio", //GridComponent
        type:"grid",
        height:"800px",
        cls:"bg-secondary text-primary",
        navigable:true
      },
      {
        name:"contact", //BannerComponent
        type:"banner",
        height:"100px",
        cls:"bg-info text-secondary min-vh-10",
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