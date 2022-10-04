import { Component, Input } from '@angular/core';
import { Item } from '../common/component';
import { ComponentsService } from '../components.service';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent{

  @Input() items: Item[];

  constructor(  ) {
    let cs = new ComponentsService();
    this.items = cs.getComponents();
    console.log("structure");
    console.log(this.items);
  }

  ngOnInit(): void {
    console.log("structure");
    console.log(this.items);
  }

}
