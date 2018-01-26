import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class RestaurantsProvider {
  private apiUrl: string;

  constructor(public _tokenService: Angular2TokenService) { }

  all(): Observable<any> {
    return this._tokenService.get('/restaurants')
      .map(res => res.json())
  }

}
