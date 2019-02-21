import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';
import { Observable } from 'rxjs';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.courses$ = this.firebaseService.getCoursesOffered();
  }


}
