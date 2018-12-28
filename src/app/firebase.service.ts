import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore'
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Info } from './model/info';
import { Course } from './model/Course';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  infoRef : AngularFirestoreDocument<Info>;

  info : Observable<Info>;
  
  constructor(
      private firestore: AngularFirestore,
      private storage : AngularFireStorage ) { 
    this.infoRef = this.firestore.collection('about').doc('info');
  }

  getInfo(){
    this.info = this.infoRef.valueChanges();
    return this.info;
  }

  getCoursesOffered():Observable<Course[]> {
    return this.firestore.collection<Course>('courses').valueChanges();
  }

  addCourse(course : Course){
    this.firestore.collection<Course>('courses').add(course)
      .then((docref) => console.log("Added successfully with ref = " + docref.id))
      .catch((error) => console.log("Error Creating Document"));
  }

  getStorageRef(path): AngularFireStorageReference{
    return this.storage.ref(path);
  }

  uploadFile(path, event) : AngularFireUploadTask{
    const filePath = path;
    const file = event.target.files[0];

    return this.storage.upload(filePath, file);
  }
}
