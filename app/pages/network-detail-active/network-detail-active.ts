import {OnInit} from 'angular2/core';
import {Page, NavController, NavParams} from 'ionic-angular';
import {SensorData} from '../../providers/sensor-data/sensor-data'

/*
  Generated class for the NetworkDetailActivePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/network-detail-active/network-detail-active.html',
  providers: [SensorData],
})
export class NetworkDetailActivePage {
  network: any;
  sensorServiceData: any;
  data: any = null;

  constructor(public nav: NavController, navParams: NavParams, sensorData: SensorData) {
    this.network = navParams.get('network');
    this.sensorServiceData = sensorData;
  }


  ngOnInit () {
    this.sensorServiceData.load(this.network.Id).subscribe(
      data => {this.data = this.getData(data);},
      err => console.log(err)
    );
  }

  getData(data) {
    return data.list.resources[0].resource.fields;
  }

  goBack() {
    this.nav.rootNav.pop();
  }
}
