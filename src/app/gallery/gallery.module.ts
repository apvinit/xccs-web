import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    MaterialModule
  ]
})
export class GalleryModule { }
