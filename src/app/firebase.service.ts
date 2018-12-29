import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore'
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Info } from './model/info';
import { Course } from './model/Course';
import { Program } from './model/program';


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

  addTimeTable(id, content){ 
    let timetableRef = this.firestore.collection('timetable');
    timetableRef.doc(id.toUpperCase()).set({prog_name : content.prog_name});
    timetableRef.doc(id.toUpperCase()).collection(content.timetable_type)
                                      .doc(content.semester).set({ url : content.url})
                                      .then((docref) => {console.log("Added successfully")})
                                      .catch((error) => console.log("Error : Adding Timetable"));
  }

  getTimeTablePrograms() : Observable<Program[]>{
    
    //using vanilla firebse method
    /* this.firestore.collection("timetable").get().subscribe((querySnapshot) => {
      querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
      });
    }); */

    // using angularFire2 method
    return this.firestore.collection('timetable').snapshotChanges().pipe(
      map( actions => actions.map(a => {
        const id = a.payload.doc.id;
        const data = a.payload.doc.data() as { name : string};
        return { id, ...data }
      }))
    )
  }

}
