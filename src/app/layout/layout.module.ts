import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';

import { LayoutRoutingModule } from './layout-routing.module';

// angular material
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    MaterialModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
