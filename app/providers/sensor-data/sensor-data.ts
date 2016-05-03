import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the SensorData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SensorData {
  data: any = null;

  constructor(public http: Http) {
    this.http = http;
  }

  load(networkId) {
    if (this.data) {
      // already loaded data
      return this.data;
    }

    // don't have the data yet
    // We're using Angular Http provider to request the data,
    // then on the response it'll map the JSON data to a parsed JS object.
    // Next we process the data and resolve the promise with the new data.
    var url = 'http://finance.yahoo.com/webservice/v1/symbols/' + networkId + '/quote?format=json&view=detail';
    return this.http.get(url).map(res => res.json());
  }

  getData(data) {
    return data.resources[0].resource.fields;
  }
}
