import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';

import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [HomeComponent, NewsComponent, BannerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class HomeModule { }
