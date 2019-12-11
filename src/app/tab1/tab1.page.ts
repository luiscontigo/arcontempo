import { Component } from '@angular/core';
import { WoodpressService } from '../services/woodpress.service';
import { LoadingController } from '@ionic/angular';
// import { WooserviceService } from '../services/wooservice.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  posts = [];
  page = 1;
  count = null;

  constructor(
    private wp: WoodpressService,
    private loadingCtrl: LoadingController
    // private wS: WooserviceService
  ) {
    // this.wS.getProducts();
    this.loadPosts();
  }

  async loadPosts() {
    const loading = await this.loadingCtrl.create({
      message: 'Awantame tantito...'
    });
    await loading.present();
 
    this.wp.getProducts().subscribe(res => {
      this.count = this.wp.totalProducts;
      this.posts = res;
      console.log(this.posts);
      loading.dismiss();
    });
  }

}
