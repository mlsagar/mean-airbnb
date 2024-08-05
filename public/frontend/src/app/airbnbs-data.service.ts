import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AirbnbsDataService {
  baseUrl = "http://localhost:3000/api/airbnbs"
  constructor(
    private _http: HttpClient
  ) { }

  get allAirbnbs() {
    return this._http.get<any>(this.baseUrl);
  }

  getOneAirbnb(airbnbId: string) {
    return this._http.get<any>(this.baseUrl + "/" + airbnbId);
  }

  removeOneAirbnb(airbnbId: string) {
    return this._http.delete<any>(this.baseUrl + "/" + airbnbId);
  }


}
