import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LadiesWearComponent } from './components/ladies-wear/ladies-wear.component';
import { MeansWearComponent } from './components/means-wear/means-wear.component';
import {MobilesDataComponent} from './components/mobiles-data/mobiles-data.component'
import { from } from 'rxjs';
 
const routes: Routes = [
  {
    path:'ladies', component:LadiesWearComponent
  },
  {
    path:'means', component:MeansWearComponent
  },
  {
    path:'mobiles', component:MobilesDataComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
