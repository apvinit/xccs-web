import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddEventComponent } from '../add-event/add-event.component';

@Component({
  selector: 'app-manage-events',
  templateUrl: './manage-events.component.html',
  styleUrls: ['./manage-events.component.scss']
})
export class ManageEventsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openAddEventsDialog(): void {
    const addEventDialogRef = this.dialog.open(AddEventComponent, {
      disableClose: true
    });
  }

}
