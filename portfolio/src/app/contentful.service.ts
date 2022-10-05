import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

const CONFIG = {
  space: 'hjcdlokntp12',
  accessToken:
    'HiUpNnv-8SD28qDX8xYsixz9YEe8XpZW1xd_3lLkkbQ',

  contentTypeIds: {
    splashComponent: 'splashComponent',
  },
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

}
