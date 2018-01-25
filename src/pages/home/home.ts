import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
@ViewChild('map') mapRef: ElementRef;
map: any;

  constructor(public navCtrl: NavController) {}

ionViewDidLoad() {this.showMap();}

showMap(){
  const location = new google.maps.LatLng(59.334591, 18.063240);
  const options = {center: location, zoom: 15};
  this.map = new google.maps.Map(this.mapRef.nativeElement, options);

  this.addMarker(location, this.map);
}

addMarker(position, map){
  return new google.maps.Marker({
    position,
    map
  });
}
}
