import { Component, OnInit, ContentChild, TemplateRef, Input } from '@angular/core';
import { Item } from '../common/component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input()
  components:  Item[];

  @ContentChild('item', { static: false })
  template: TemplateRef<any>;


  ngOnInit(): void {
    console.log("home");
    console.log(this.components);
    console.log(this.template);
  }

  ngAfterContentInit(): void {
    console.log(this.template)
    // this.template.createEmbeddedView({ item: this.components[0] })
  }

}
