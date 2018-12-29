import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { MaterialModule } from '../material.module';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddTimeTableComponent } from './add-time-table/add-time-table.component';
import { AddEventComponent } from './add-event/add-event.component'

@NgModule({
  declarations: [AdminComponent, AddCourseComponent, AddTimeTableComponent, AddEventComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
