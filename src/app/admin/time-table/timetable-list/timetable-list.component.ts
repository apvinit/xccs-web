import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { Program } from 'src/app/model/program';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-timetable-list',
  templateUrl: './timetable-list.component.html',
  styleUrls: ['./timetable-list.component.scss']
})
export class TimetableListComponent implements OnInit {

  constructor(
    private firebaseService: FirebaseService,
    private dialog: MatDialog
  ) { }

  timetableItems$: Observable<Program[]>;

  ngOnInit() {
    this.timetableItems$ = this.firebaseService.getTimeTable();
  }

  edit(timetable: any): void {
    // TODO:
  }

  askDeleteConfirmation(program: string, type: string, semester: string): void {
    const confirmationRef = this.dialog.open(ConfirmationDialogComponent);
    confirmationRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete(program, type, semester);
      }
    });
  }

  delete(program: string, type: string, semester: string): void {
    this.firebaseService.removeTimetable(program, type, semester);
  }
}
