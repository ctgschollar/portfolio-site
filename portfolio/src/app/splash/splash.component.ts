import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { Entry } from 'contentful';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css', '../app.component.css']
})
export class SplashComponent extends BaseComponent {

  protected splashImage: string;
  protected splashText: string[];

  override ngOnInit(): void {
    this.contentfulService.getSplashContent()
    .then(splashContent => {
      this.extractContent(splashContent);
    })
  }

  extractContent(content:Entry<any>[]) : void {
    this.splashText=content[0].fields.splashText.split("\n");
    this.splashImage=content[0].fields.splashImage.fields.file.url;
  }


}
