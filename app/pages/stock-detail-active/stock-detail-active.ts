import {OnInit} from 'angular2/core';
import {Page, NavController, NavParams} from 'ionic-angular';
import {StockService} from '../../providers/stock-data/stock-service';

/*
  Generated class for the NetworkDetailActivePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/stock-detail-active/stock-detail-active.html',
  providers: [StockService],
})
export class StockDetailActivePage {
  stock: any;
  stockService: any;
  stockData: any = null;
  stockId: string;

  constructor(public nav: NavController, navParams: NavParams, stockService: StockService) {
    this.stock = navParams.get('stock');
    this.stockService = stockService;
  }


  ngOnInit () {
    this.stockService.load(this.stock.Id).subscribe(
      data => {this.stockData = this.stockService.getData(data);},
      err => console.log(err)
    );
  }

  goBack() {
    this.nav.rootNav.pop();
  }
}
