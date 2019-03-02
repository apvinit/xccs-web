import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';
import { Observable } from 'rxjs';
import { GalleryItem } from 'src/app/model/gallery-item';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) { }

  events$: Observable<GalleryItem[]>;

  ngOnInit() {
    this.events$ = this.firebaseService.getEvents();
  }

}
