import { RestaurantsProvider } from './../../providers/restaurants/restaurants';
import { RestaurantsProvider } from './../../providers/restaurants/restaurant_categories';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public restaurants: any
  public restaurant_categories: any

  constructor(
    public navCtrl: NavController,
    public restaurantsProvider: RestaurantsProvider,
    public restaurantCategoriesProvider: RestaurantCategoriesProvider,
  ) {
    this.restaurantCategoriesProvider.all().subscribe(({ data }) => {
      this.restaurant_categories = data;
      console.log(this.restaurant_categories);
    })
  }

  addMarker(position, map) {
    return new google.maps.Marker({
      position,
      map
    });
  }
}
