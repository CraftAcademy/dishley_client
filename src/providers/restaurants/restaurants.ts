import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestaurantsProvider {
  private apiUrl: string;

  constructor(public http: HttpClient) {
    console.log('Hello Provider, here are some restaurants');
    this.apiUrl = 'https://jak-sie-masz-slowfood.herokuapp.com/api'
  }

  all() : Observable<any> {
    return this.http.get(this.apiUrl + '/restaurants')
  }

}
