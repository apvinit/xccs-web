import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';
import { Course } from 'src/app/model/course';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) { }

  courses$: Observable<Course[]>;

  ngOnInit() {
    this.courses$ = this.firebaseService.getCoursesOffered();
  }

}
