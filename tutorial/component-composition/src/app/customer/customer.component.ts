import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../common/item';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  @Input() item: Item;
  @Input() isSelected: boolean;

  @Output() selected = new EventEmitter<Item>();
  @Output() unselected = new EventEmitter<Item>();

  consumeEvent (event: Event) {
      console.log(event);
      // event.target.checked ? this.selected.emit(this.item) : this.unselected.emit(this.item);
  }

}
