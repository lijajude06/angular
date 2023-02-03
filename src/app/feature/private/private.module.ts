import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutModule} from './about/about.module';
import {HomeModule} from './home/home.module'
import { PrivateRoutingModule } from './private-routing.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AboutModule,
    HomeModule
  ],
  exports:[HomeModule, AboutModule, PrivateRoutingModule]
})
export class PrivateModule { }
