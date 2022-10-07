import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { Entry } from 'contentful';
import { Block } from '../common/component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent extends BaseComponent {

  @Input()
  protected blockWidth = 6;
  protected blocks: Block[] = [];

  override ngOnInit(): void {
    if (this.item.blockWidth) {
      this.blockWidth = this.item.blockWidth;
    }
    this.contentfulService.getEntryContent(this.item.name)
    .then(splashContent => {
      this.extractContent(splashContent);
    })
  }

  extractContent(content:Entry<any>) : void {
    for (let block in content.fields.blocks) {
      if (content.fields.blocks[block].fields.text)
        content.fields.blocks[block].fields.text = content.fields.blocks[block].fields.text.split("\n");
      this.blocks.push(content.fields.blocks[block].fields);
    }
    console.log(this.blocks);
  }

}
