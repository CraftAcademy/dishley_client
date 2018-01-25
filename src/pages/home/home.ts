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

ionViewDidLoad() {console.log(this.mapRef);}
}
