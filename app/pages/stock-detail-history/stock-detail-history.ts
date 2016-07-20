import {OnInit} from 'angular2/core';
import {Page, NavController, NavParams, Platform} from 'ionic-angular';

/*
  Generated class for the NetworkDetailHistoryPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/stock-detail-history/stock-detail-history.html',
})
export class StockDetailHistoryPage {
  stock: any = null;
  chartView: number;
  period: string = 'Day';
  isAndroid: boolean = false;

  constructor(public nav: NavController, navParams: NavParams, platform: Platform) {
    this.stock = navParams.get('stock');
    this.chartView = 1;
    this.isAndroid = platform.is('android');

  }

  ngOnInit () {
  }

  goBack() {
    this.nav.rootNav.pop();
  }
}
