import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddCourseComponent } from '../add-course/add-course.component';

@Component({
  selector: 'app-manage-courses',
  templateUrl: './manage-courses.component.html',
  styleUrls: ['./manage-courses.component.scss']
})
export class ManageCoursesComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openAddCoursesDialog(): void {
    const addCourseDialogRef = this.dialog.open(AddCourseComponent, {
      width: '80vw',
      panelClass: 'mt-5',
      disableClose: false
    });
  }

}
