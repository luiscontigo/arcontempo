import { Component } from '@angular/core';

import { WoodpressService } from '../services/woodpress.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  products = [];
  page = 1;
  count = null;

  constructor(
    private wp: WoodpressService,
    private loadingCtrl: LoadingController
  ) {
    this.loadProducts();
  }

  async loadProducts() {
    const loading = await this.loadingCtrl.create({
      message: 'Awantame tantito...'
    });
    await loading.present();
 
    this.wp.getProducts().subscribe(res => {
      this.count = this.wp.totalProducts;
      this.products = res;
      console.log(this.products);
      loading.dismiss();
    });
  }

}
