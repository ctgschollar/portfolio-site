import { Component } from '@angular/core';
import { Item } from './common/item';
import { CustomersService } from '../customers.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-composition';
  customers: Item[];

  constructor () {
    let cs = new CustomersService();
    this.customers = cs.getCustomers()
  }

  onSelected(item: Event) {
    console.log("app");
    console.log('selected', item)
  }

   onUnselected(item: Event) {
     console.log("app");
     console.log('unselected', item)
  }
}
