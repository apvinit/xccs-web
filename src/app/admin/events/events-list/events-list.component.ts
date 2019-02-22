import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';
import { Observable } from 'rxjs';
import { Event_ } from 'src/app/model/event';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) { }

  events$: Observable<Event_[]>;

  ngOnInit() {
    this.events$ = this.firebaseService.getEvents();
  }

}
