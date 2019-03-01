import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GalleryDetailComponent } from './gallery-detail/gallery-detail.component';

@NgModule({
  declarations: [GalleryComponent, GalleryDetailComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class GalleryModule { }
