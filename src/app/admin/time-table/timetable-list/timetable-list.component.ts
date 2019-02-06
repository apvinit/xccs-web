import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { Program } from 'src/app/model/program';

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

  askDeleteConfirmation(id: string): void {
    // TODO:
  }

}
