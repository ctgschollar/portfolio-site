import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { Block } from './common/component'

interface EntryId {
  services:string
}

//must be type any to allow accessing keys with strings
const CONFIG: any = {
  space: 'hjcdlokntp12',
  accessToken:
    'HiUpNnv-8SD28qDX8xYsixz9YEe8XpZW1xd_3lLkkbQ',

  contentTypeIds: {
    splashComponent: 'splashComponent',
    gridComponent:'gridComponet',
  },

  entryIds: {
    "services": 'Tv4HdfTgSZoG26nf81Q9t',
    "portfolio": 'Xhu0SQrf5Lyc2tAKE2RHz',
    "tools": '3oSD6PmbBGXr9x0ylKQh1f'
  }
};

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { }

  getSplashContent(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.splashComponent
    }, query))
    .then(res => res.items);
  }

  getEntryContent(name:string): Promise<Entry<any>>  {
    return this.cdaClient.getEntry(CONFIG.entryIds[name])
      .then(res => res);
  }

}
