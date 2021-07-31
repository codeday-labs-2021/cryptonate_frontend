import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd";

  constructor(private http: HttpClient) { }

  getEthUsdConversion() {
    return this.http.get<any>(this.url, {withCredentials: true});
  }
}
