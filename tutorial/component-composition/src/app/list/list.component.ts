import { Component, Input, ContentChild, TemplateRef } from '@angular/core';
import { Item } from '../common/item'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{

  @Input() items: Item[] = [];
  @Input() itemsPerPage = 2;
  @Input() currentPage: number;

  @ContentChild('item', { static: false })
  template: TemplateRef<any>;
  
  get start() {
    return this.currentPage * this.itemsPerPage;
  }
  get end() {
    return this.currentPage * this.itemsPerPage + this.itemsPerPage;
  }

}
