import { Component } from '@angular/core';

import { WoodpressService } from '../services/woodpress.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  posts = [];
  page = 1;
  count = null;

  constructor(
    private wp: WoodpressService,
    private loadingCtrl: LoadingController
  ) {
    this.loadPosts();
  }

  async loadPosts() {
    const loading = await this.loadingCtrl.create({
      message: 'Awantame tantito...'
    });
    await loading.present();
 
    this.wp.getPosts().subscribe(res => {
      this.count = this.wp.totalPosts;
      this.posts = res;
      console.log(this.posts);
      loading.dismiss();
    });
  }

}
