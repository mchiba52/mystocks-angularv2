import {OnInit} from 'angular2/core';
import {Page, NavController, NavParams} from 'ionic-angular';
import {NetworkDetailActivePage} from '../network-detail-active/network-detail-active';
import {NetworkDetailHistoryPage} from '../network-detail-history/network-detail-history';
import {SensorData} from '../../providers/sensor-data/sensor-data'

/*
  Generated class for the NetworkDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/network-detail/network-detail.html',
  providers: [SensorData],
})
export class NetworkDetailPage {
  sensorServiceData: any;
  network: any;
  data: any;
  mySelectedIndex: number;
  tab1Root: any;
  tab2Root: any;
  constructor(public nav: NavController,
              public navParams: NavParams,
              private sensorData: SensorData) {
                this.nav = nav;
                this.network = navParams.data;

                this.mySelectedIndex = navParams.data.tabIndex || 0;

                // set the root pages for each tab
                this.tab1Root = NetworkDetailActivePage;
                this.tab2Root = NetworkDetailHistoryPage;

              }

  getData() {
    return this.sensorServiceData;
  }

}
