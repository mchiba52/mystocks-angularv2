import {Page, NavController, NavParams} from 'ionic-angular';

/*
  Generated class for the NetworkDetailHistoryPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/network-detail-history/network-detail-history.html',
})
export class NetworkDetailHistoryPage {
  network: any = null;
  sensorData: any = null;

  constructor(public nav: NavController, navParams: NavParams) {
    this.network = navParams.get('network');
    this.sensorData = navParams.get('sensorData');
  }

  goBack() {
    this.nav.rootNav.pop();
  }
}
