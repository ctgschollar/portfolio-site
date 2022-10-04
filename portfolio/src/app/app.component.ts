import { Component } from '@angular/core';
import { Item } from './common/component';
import { ComponentsService } from './components.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'portfolio';
  components: Item[];

  constructor () {
    let cs = new ComponentsService()
    this.components = cs.getComponents();
    console.log("app");
    console.log(this.components);
  }
}
