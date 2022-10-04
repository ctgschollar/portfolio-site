import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../common/component';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css', '../app.component.css']
})
export class BaseComponent implements OnInit {

  @Input() item: Item;

  ngOnInit(): void {
  }

}

/*Usage
cls is some css class that is defined for this component

<app-base [name]="component.name" [cls]="component.cls" [height]="component.height"></app-base>
*/