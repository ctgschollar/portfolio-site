import { Component, OnInit, Input } from '@angular/core';
import { Entry } from 'contentful';
import { Item } from '../common/component';
import { ContentfulService } from '../contentful.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css', '../app.component.css']
})
export class BaseComponent implements OnInit {

  @Input() item: Item;

  constructor(public contentfulService: ContentfulService) { }

  ngOnInit(): void {
    console.log("base");
    console.log(this.item.name);
  }

}