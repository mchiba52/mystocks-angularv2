import {OnInit} from 'angular2/core';
import {Page, NavController, NavParams} from 'ionic-angular';
import {StockDetailActivePage} from '../stock-detail-active/stock-detail-active';
import {StockDetailHistoryPage} from '../stock-detail-history/stock-detail-history';

/*
  Generated class for the NetworkDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/stock-detail/stock-detail.html',
})
export class StockDetailPage {
  stock: any;
  mySelectedIndex: number;
  tab1Root: any;
  tab2Root: any;
  constructor(public nav: NavController,
              public navParams: NavParams) {
                this.nav = nav;
                this.stock = navParams.data;

                this.mySelectedIndex = navParams.data.tabIndex || 0;

                // set the root pages for each tab
                this.tab1Root = StockDetailActivePage;
                this.tab2Root = StockDetailHistoryPage;

              }
}
