import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../common/component'
import { ComponentsService } from '../components.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../app.component.css']
})
export class HeaderComponent implements OnInit {

  components: Item[];
  title: string;

  constructor(  ) {
    let cs = new ComponentsService();
    this.components = cs.getNavComponents();
  }

  ngOnInit(): void {
    this.typewriter("title","schollar.dev", 3);
  }

  sleep(ms: number): Promise<boolean> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // could make this a service??
  async typewriter(property: keyof HeaderComponent, text:string, period:number): Promise<void> {
    let sleepPeriod: number = period / text.length * 1000;
    for (let i = 0; i < 4; i++) {
      this["title"] = i % 2 === 0 ? "|" : "";
      await this.sleep(sleepPeriod);
    }
    for (let i = 0; i < text.length +1; i++){
      // this[property] = text;
      this["title"] = text.substring(0,i) + (i % 2 === 0 ? "|" : "") ;
      await this.sleep(sleepPeriod);
    }
    for (let i = 1; i < 6; i++) {
      this["title"] =  text + (i % 2 === 0 ? "|" : "");
      await this.sleep(sleepPeriod);
    }
    this["title"] = text
  }
}
