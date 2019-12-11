import { Component } from '@angular/core';
import { WooserviceService } from '../services/wooservice.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private wS: WooserviceService
  ) {
    this.wS.getProducts();
  }

}
