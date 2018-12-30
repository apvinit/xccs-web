import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MaterialModule } from '../material.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule
  ],
  exports : [
    FooterComponent
  ]
})
export class SharedModule { }
