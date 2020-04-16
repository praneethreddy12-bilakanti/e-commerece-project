import { Component, OnInit, Output } from '@angular/core';
import { Dresses } from '../dresses';
import{ DressesService} from '../dresses.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-dresses',
  templateUrl: './dresses.component.html',
  styleUrls: ['./dresses.component.css']
})
export class DressesComponent implements OnInit {
  
    dresses:any;
    itemprice;
  totalprice: number;

  constructor(private dressesservice:DressesService)
  {
  let response=dressesservice.getLadiesProducts();
  response.subscribe(data=>this.dresses=data)
   
  }
  ngOnInit() {

  }
  addcart() {
    
   this.itemprice= document.getElementsByClassName("item-price");
   console.log("item price:"+this.itemprice)
    this.totalprice = this.dresses[0].ladiesDressPorductPrice ;
    console.log("total price:"+this.totalprice)
  }
  addcart2() {
    
    this.itemprice= document.getElementsByClassName("item-price");
    console.log("item price:"+this.itemprice);
     this.totalprice +=this.dresses[1].ladiesDressPorductPrice ;
   }
   addcart3() {
    
    this.itemprice= document.getElementsByClassName("item-price");
    console.log("item price:"+this.itemprice.value)
     this.totalprice += this.dresses[2].ladiesDressPorductPrice; 
   }
   totalamount()
   {
     return this.totalamount;
   }
}
