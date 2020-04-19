import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LadiesWearComponent } from './components/ladies-wear/ladies-wear.component';
import {DataLoadService} from './services/dataload.service'
import { from } from 'rxjs';
import { MeansWearComponent } from './components/means-wear/means-wear.component';
import { MobilesDataComponent } from './components/mobiles-data/mobiles-data.component';
@NgModule({
  declarations: [
    AppComponent,
    LadiesWearComponent,
    MeansWearComponent,
    MobilesDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataLoadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
