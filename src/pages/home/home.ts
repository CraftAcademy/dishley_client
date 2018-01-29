import { RestaurantsProvider } from './../../providers/restaurants/restaurants';
import { RestaurantCategoriesProvider } from './../../providers/restaurants/restaurant_categories';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public restaurants: any
  public restaurantCategories: any

  constructor(
    public navCtrl: NavController,
    public restaurantsProvider: RestaurantsProvider,
    public restaurantCategoriesProvider: RestaurantCategoriesProvider
  ) {
    this.restaurantCategoriesProvider.all().subscribe(({ data }) => {
      this.restaurantCategories = data;
      console.log(this.restaurantCategories);
    })
  }

  addMarker(position, map) {
    return new google.maps.Marker({
      position,
      map
    });
  }
}
