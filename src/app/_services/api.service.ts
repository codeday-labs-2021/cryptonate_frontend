import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd";

  constructor(private http: HttpClient) { }

  getEthUsdConversion() {
    return this.http.get<any>(`${environment.apiUrl}/api/wallet/usdprice`);;
  }
}
