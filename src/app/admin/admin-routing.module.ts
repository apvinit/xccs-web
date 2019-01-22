import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddTimeTableComponent } from './add-time-table/add-time-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageNewsComponent } from './news/manage-news/manage-news.component';

const routes: Routes = [
  {
    path: 'xccs-admin', component : AdminComponent,
    children : [
      {
        path : '', component : DashboardComponent
      },
      {
        path : 'news', component : ManageNewsComponent ,
        children : [
          {
            path : 'add-news', component : AddNewsComponent
          }
        ]
      },
      {
        path : 'events', component : AddEventComponent
      },
      {
        path : 'timetable', component : AddTimeTableComponent
      },
      {
        path : 'courses', component : AddCourseComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
