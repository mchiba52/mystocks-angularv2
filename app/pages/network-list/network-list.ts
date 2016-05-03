import {Page, NavController} from 'ionic-angular';
import {NetworkDetailPage} from '../network-detail/network-detail'

/*
  Generated class for the NetworkListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/network-list/network-list.html',
})
export class NetworkListPage {
  networkArray: any;
  constructor(public nav: NavController) {
    this.nav = nav;
    this.networkArray = [];

    this.networkArray = [
      {Id: "AAPL"},
      {Id: "GPRO"},
      {Id: "FB"},
      {Id: "NFLX"}
    ];
  }
  goToNetworkDetail(networkData) {
    // go to the network detail page
    // and pass in the networkData data
    this.nav.push(NetworkDetailPage, networkData);
  }
}
