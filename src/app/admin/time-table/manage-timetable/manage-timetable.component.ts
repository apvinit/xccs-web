import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddTimeTableComponent } from '../add-time-table/add-time-table.component';

@Component({
  selector: 'app-manage-timetable',
  templateUrl: './manage-timetable.component.html',
  styleUrls: ['./manage-timetable.component.scss']
})
export class ManageTimetableComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openAddTimetableDialog(): void {
    const addNewsDialogRef = this.dialog.open(AddTimeTableComponent, {
      width: '400px'
    });
  }

}
