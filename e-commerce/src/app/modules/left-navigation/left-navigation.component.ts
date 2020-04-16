import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Router} from '@angular/router'
import { ShirtsComponent } from 'src/app/mens-wear/shirts/shirts.component';
@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.css']
})
export class LeftNavigationComponent implements OnInit {

  constructor(    private router: Router
    ) { }

  ngOnInit() {
  }
  navigateToSirts()
  {
    this.router.navigateByUrl('/shirts');
  }
}
