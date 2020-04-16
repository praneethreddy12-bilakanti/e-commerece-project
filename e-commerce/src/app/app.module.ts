import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftNavigationComponent } from './modules/left-navigation/left-navigation.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { FooterComponent } from './footer/footer.component';
import { SamsungComponent } from './mobiles/samsung/samsung.component';
import { MiComponent } from './mobiles/mi/mi.component';
import { LenovoComponent } from './mobiles/lenovo/lenovo.component';
import { ShirtsComponent } from './mens-wear/shirts/shirts.component';
import { TShirtsComponent } from './mens-wear/t-shirts/t-shirts.component';
import { ShoesComponent } from './mens-wear/shoes/shoes.component';
import { DressesComponent } from './ladies/dresses/dresses.component';
import { HeaderMobilesComponent } from './mobiles/header-mobiles/header-mobiles.component';
import { HeaderLadiesComponent } from './ladies/header-ladies/header-ladies.component';
import { HeaderMensComponent } from './mens-wear/header-mens/header-mens.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import{DressesService} from './ladies/dresses.service'
import { from } from 'rxjs';
import { RouterModule } from '@angular/router';
import { AddCartComponent } from './add-cart/add-cart/add-cart.component';
@NgModule({
  declarations: [
    AppComponent,
    LeftNavigationComponent,
    SlideshowComponent,
    FooterComponent,
    SamsungComponent,
    MiComponent,
    LenovoComponent,
    ShirtsComponent,
    TShirtsComponent,
    ShoesComponent,
    DressesComponent,
    HeaderMobilesComponent,
    HeaderLadiesComponent,
    HeaderMensComponent,
    AddCartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [
    DressesService,
    DressesComponent
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
