import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WoodpressService {

  url = `http://artcontemporaneo.com/wp-json/wp/v2/`;
  totalProducts = null;
  totalPosts = null;
  pages: any;

  constructor(
    private http: HttpClient
  ) { }

  getProducts(page = 1): Observable<any[]> {
    const options = {
      observe: 'response' as 'body',
      params: {
        per_page: '5',
        page: '' + page
      }
    };

    return this.http.get<any[]>(`${this.url}product?_embed`, options).pipe(
      map(resp => {
        this.pages = resp['headers'].get('x-wp-totalpages');
        this.totalProducts = resp['headers'].get('x-wp-total');

        let data = resp['body'];

        // for (let post of data) {
        //   post.media_url = post['embedded']['wp:featuredmedia'][0]['media_details'].sizes['medium'].source_url;
        // }
        return data;
      })
    );
  }

  getProductContent(id) {
    return this.http.get(`${this.url}product/${id}?_embed`).pipe(
      map(product => {
        product['media_url'] = product['_embedded']['wp:featuredmedia'][0]['media_details'].sizes['medium'].source_url;
        return product;
      })
    );
  }

  getPosts(page = 1): Observable<any[]> {
    const options = {
      observe: 'response' as 'body',
      params: {
        per_page: '5',
        page: '' + page
      }
    };

    return this.http.get<any[]>(`${this.url}posts?_embed`, options).pipe(
      map(resp => {
        this.pages = resp['headers'].get('x-wp-totalpages');
        this.totalPosts = resp['headers'].get('x-wp-total');

        let data = resp['body'];

        // for (let post of data) {
        //   post.media_url = post['embedded']['wp:featuredmedia'][0]['media_details'].sizes['medium'].source_url;
        // }
        return data;
      })
    );
  }


}


