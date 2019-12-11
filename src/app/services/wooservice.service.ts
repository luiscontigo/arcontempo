import { Injectable } from '@angular/core';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

@Injectable({
  providedIn: 'root'
})
export class WooserviceService {

  constructor() { }

  getProducts() {
  const api = new WooCommerceRestApi({
    url: 'http://example.com',
    consumerKey: 'ck_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    consumerSecret: 'cs_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    version: 'wc/v3'
    });
  }
}
