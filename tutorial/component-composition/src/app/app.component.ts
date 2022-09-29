import { Component } from '@angular/core';
import { Item } from './common/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-composition';
  customers = [
    { display: "Big Bank", value: 1 },
    { display: "Small Startup", value: 2 },
    { display: "Medium Great Shop", value: 3 },
    { display: "Big Bank 2", value: 4 },
    { display: "Small Startup 2", value: 5 },
    { display: "Medium Great Shop 2", value: 6 }
  ];

  onSelected(item: Event) {
    console.log('selected', item)
  }

   onUnselected(item: Event) {
    console.log('unselected', item)
  }
}
