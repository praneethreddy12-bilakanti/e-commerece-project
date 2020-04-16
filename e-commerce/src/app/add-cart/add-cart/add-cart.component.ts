import { Component, OnInit } from '@angular/core';
import { DressesComponent } from 'src/app/ladies/dresses/dresses.component';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit {

  constructor(public dresscomponent:DressesComponent) { }
totalAmount:any;
ladiesDressAmount;
  ngOnInit() {
    this.ladiesDressAmount=this.dresscomponent.totalprice;
    console.log("dressesssssssssssssssssssss:"+this.ladiesDressAmount)
    this.totalAmount+=this.ladiesDressAmount;
    console.log("total"+this.totalAmount)
  }

}
