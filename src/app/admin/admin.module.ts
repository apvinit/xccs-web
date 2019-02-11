import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { MaterialModule } from '../material.module';
import { AddCourseComponent } from './courses/add-course/add-course.component';
import { AddTimeTableComponent } from './time-table/add-time-table/add-time-table.component';
import { AddEventComponent } from './events/add-event/add-event.component';
import { AddNewsComponent } from './news/add-news/add-news.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageNewsComponent } from './news/manage-news/manage-news.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { ManageTimetableComponent } from './time-table/manage-timetable/manage-timetable.component';
import { TimetableListComponent } from './time-table/timetable-list/timetable-list.component';
import { ManageCoursesComponent } from './courses/manage-courses/manage-courses.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { ManageEventsComponent } from './events/manage-events/manage-events.component';
import { EventsListComponent } from './events/events-list/events-list.component';

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
    ManageTimetableComponent,
    TimetableListComponent,
    ManageCoursesComponent,
    CoursesListComponent,
    ManageEventsComponent,
    EventsListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    AddNewsComponent,
    AddTimeTableComponent,
    AddCourseComponent
  ]
})
export class AdminModule {}
