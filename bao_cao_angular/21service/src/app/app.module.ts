import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IpComponent } from './ip.component';
import { IpComponentService } from './ip.component_service';
import { IpComponentngOnInit } from './ip.component_ngOnInit';
import { IpService } from './ip.service';

@NgModule({
  declarations: [
    AppComponent,
    IpComponent,
    IpComponentService,
    IpComponentngOnInit
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [IpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
