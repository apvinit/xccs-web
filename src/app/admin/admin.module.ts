import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { MaterialModule } from '../material.module';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddTimeTableComponent } from './add-time-table/add-time-table.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddNewsComponent } from './news/add-news/add-news.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageNewsComponent } from './news/manage-news/manage-news.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { ManageTimetableComponent } from './time-table/manage-timetable/manage-timetable.component';

@NgModule({
  declarations: [
    AdminComponent,
    AddCourseComponent,
    AddTimeTableComponent,
    AddEventComponent,
    AddNewsComponent,
    DashboardComponent,
    ManageNewsComponent,
    NewsListComponent,
    ManageTimetableComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    AddNewsComponent
  ]
})
export class AdminModule {}
