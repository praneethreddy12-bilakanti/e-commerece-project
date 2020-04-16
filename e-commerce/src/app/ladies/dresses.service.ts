import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DressesService {

  configUrl:string = 'http://localhost:9091/ladies';
  
  constructor(private _http:HttpClient) {
     console.log(this.configUrl)
  }
getLadiesProducts()  {
      return this._http.get("http://localhost:9091/ladies/");
    }
  }