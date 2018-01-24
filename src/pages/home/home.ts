import { RestaurantsProvider } from './../../providers/restaurants/restaurants';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public restaurants :any

  constructor(
    public navCtrl: NavController,
    public restaurantsProvider: RestaurantsProvider,
  ) {
    this.restaurantsProvider.all().subscribe(({ data }) => {
      this.restaurants = data;
      console.log(this.restaurants);
    })
  }

}
