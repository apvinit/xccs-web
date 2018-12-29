import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';
import { Observable } from 'rxjs';
import { Program } from 'src/app/model/program';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.scss']
})
export class TimeTableComponent implements OnInit {

  timetablePrograms : Observable<Program[]>;

  constructor(private firebaseService : FirebaseService) { }

  ngOnInit() {
    this.timetablePrograms =  this.firebaseService.getTimeTablePrograms();
  }

}
