import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/model/Course';
import { FormGroup, FormControl } from '@angular/forms';
import { FirebaseService } from 'src/app/firebase.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  courseForm = new FormGroup({
    programme_code : new FormControl(''),
    programme_name : new FormControl(''),
    min_duration : new FormControl(''),
    max_duration : new FormControl(''),
    course_fee : new FormControl(''),
    min_age : new FormControl(''),
    max_age : new FormControl(''),
    eligibility : new FormControl(''),
    info : new FormControl(''),
    description : new FormControl('')
  })


  course : Course;

  constructor(private firebaseService : FirebaseService) { }

  ngOnInit() {
  }

  addCourse(){
    this.course = this.courseForm.value;
    this.firebaseService.addCourse(this.course);    
    this.courseForm.reset()
  }

}
