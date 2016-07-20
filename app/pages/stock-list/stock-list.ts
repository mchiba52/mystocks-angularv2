import {Page, NavController} from 'ionic-angular';
import {StockDetailPage} from '../stock-detail/stock-detail'

/*
  Generated class for the NetworkListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/stock-list/stock-list.html',
})
export class StockListPage {
  stockArray: any;
  constructor(public nav: NavController) {
    this.nav = nav;
    this.stockArray = [];

    this.stockArray = [
      {Id: "AAPL", Elem: 1},
      {Id: "GPRO", Elem: 2},
      {Id: "FB", Elem: 3},
      {Id: "NFLX", Elem: 4}
    ];
  }
  goToStockDetail(stockData) {
    // go to the network detail page
    // and pass in the networkData data
    this.nav.push(StockDetailPage, stockData);
  }
}
