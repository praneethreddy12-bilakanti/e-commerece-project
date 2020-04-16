import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShirtsComponent } from './mens-wear/shirts/shirts.component';
import { TShirtsComponent } from './mens-wear/t-shirts/t-shirts.component';
import { ShoesComponent } from './mens-wear/shoes/shoes.component';
import { DressesComponent } from './ladies/dresses/dresses.component';
import { HeaderMobilesComponent } from './mobiles/header-mobiles/header-mobiles.component';
import { HeaderMensComponent } from './mens-wear/header-mens/header-mens.component';
import { HeaderLadiesComponent } from './ladies/header-ladies/header-ladies.component';
import { AddCartComponent } from './add-cart/add-cart/add-cart.component';


const routes: Routes = [
{
  path:"shirts",component:ShirtsComponent
},
{
  path:'t-shirts',component:TShirtsComponent
},
{
  path:'shoes',component:ShoesComponent
},
{
  path:'dresses',component:DressesComponent
},
{
  path:'mobiles',component:HeaderMobilesComponent
}
,
{
  path:'means-wear',component:HeaderMensComponent
}
,
{
  path:'ladies-wear',component:HeaderLadiesComponent
},
{
  path:'addcart',component:AddCartComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
