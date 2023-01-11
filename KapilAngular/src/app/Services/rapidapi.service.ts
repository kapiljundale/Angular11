import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {
   
  url="https://bb-finance.p.rapidapi.com/market/auto-complete?query=apple";

  constructor(private _httpClient:HttpClient) { }

  getDataBBFinance(){
    let headers = new HttpHeaders({
      'X-RapidAPI-Host': 'bb-finance.p.rapidapi.com',
      'X-RapidAPI-Key': 'd5d8cf7f01mshfaad59cb0dcdbdfp1b4902jsn45234b2a462d'
    })
    return this._httpClient.get(this.url,{headers: headers});
  }
}
