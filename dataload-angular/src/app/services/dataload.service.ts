import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LadiesWear} from '../models/ladies-wear';
import {MeansWear} from '../models/means-wear';

import { Observable } from 'rxjs';  
import { Mobiles } from '../models/mobiles';

@Injectable({
  providedIn: 'root'
})
export class DataLoadService {
  details:any;

  constructor( private _http:HttpClient) { }
  baseUrl:string='http://localhost:1010/';
  
  uploadLadiesFile( file: File  ) : Observable<any>  
  {  
    let url = this.baseUrl + "ladies/uploadImage/";  
  
    const formdata: FormData = new FormData();  
    
    formdata.append('file', file);  
   
    return this._http.post(url , formdata);  
  } 
  sendDetailsofLadiesToDB(ld:LadiesWear): Observable<any>  
  {
    let url = this.baseUrl + "ladies/lady";  
    this.details= this._http.post(url,ld)
  //alert("details from service layer:"+this.details.ladiesDressPorductPrice)
  return this.details;
  } 
  uploadMeansFile( file: File  ) : Observable<any>  
  {  
    let url = this.baseUrl + "means/uploadImage/";  
  
    const formdata: FormData = new FormData();  
    
    formdata.append('file', file);  
   
    return this._http.post(url , formdata);  
  } 
  sendDetailsofMeansToDB(mean:MeansWear): Observable<any>  
  {
    let url = this.baseUrl + "means/men";  
    this.details= this._http.post(url,mean)
  //alert("details from service layer:"+this.details.ladiesDressPorductPrice)
  return this.details;
  } 
  uploadMobilesFile( file: File  ) : Observable<any>  
  {  
    let url = this.baseUrl + "mobiles/uploadImage/";  
  
    const formdata: FormData = new FormData();  
    
    formdata.append('file', file);  
   
    return this._http.post(url , formdata);  
  } 
  sendDetailsofMobilesToDB(mobile:Mobiles): Observable<any>  
  {
    let url = this.baseUrl + "mobiles/mobile";  
    this.details= this._http.post(url,mobile)
  //alert("details from service layer:"+this.details.ladiesDressPorductPrice)
  return this.details;
  }
}  

