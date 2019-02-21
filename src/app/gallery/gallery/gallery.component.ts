import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';
import { Event_ } from 'src/app/model/event';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) { }

  events: Observable<Event_[]>;

  ngOnInit() {
    this.events = this.firebaseService.getEvents();
  }
}
