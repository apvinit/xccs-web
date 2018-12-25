import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeTableRoutingModule } from './time-table-routing.module';
import { TimeTableComponent } from './time-table/time-table.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [TimeTableComponent],
  imports: [
    CommonModule,
    TimeTableRoutingModule,
    MaterialModule
  ]
})
export class TimeTableModule { }
