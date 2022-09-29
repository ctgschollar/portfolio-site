import { Component, Input } from '@angular/core';
import { Item } from '../common/item'

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent {

  @Input() items: Item[] = [];
  currentPage: number;
  selectedItems: Item[] = [];

  selected(item: Item) {
    this.selectedItems = [...this.selectedItems, item];
  }

  unselected(item: Item) {
    this.selectedItems = this.selectedItems.filter(
      ({ value }) => value !== item.value
    );
  }

  isItemSelected(item: Item) {
    return this.selectedItems.some(({ value }) => item.value === value);
  }

}
