import { Injectable } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import {
  AngularFireStorage,
  AngularFireUploadTask,
  AngularFireStorageReference
} from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Info } from './model/info';
import { Course } from './model/course';
import { Program } from './model/program';
import { GalleryItem } from './model/gallery-item';
import { News } from './model/news';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  infoRef: AngularFirestoreDocument<Info>;

  info: Observable<Info>;

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage,
    private snackBar: MatSnackBar
  ) {
    this.infoRef = this.firestore.collection('about').doc('info');
  }

  getInfo() {
    this.info = this.infoRef.valueChanges();
    return this.info;
  }

  getCoursesOffered(): Observable<Course[]> {
    return this.firestore.collection<Course>('courses').valueChanges();
  }

  addCourse(course: Course) {
    this.firestore
      .collection<Course>('courses')
      .add(course)
      .then(docref => console.log('Added successfully with ref = ' + docref.id))
      .catch(error => console.log('Error Creating Document'));
  }

  getStorageRef(path): AngularFireStorageReference {
    return this.storage.ref(path);
  }

  uploadFile(path, file): AngularFireUploadTask {
    return this.storage.upload(path, file);
  }

  // CRUD operations for the Timetable

  /**
   *
   * @param id The id of the program
   * @param content The name of the prgram and the schedules
   */
  addTimeTable(id, content) {
    const timetableRef = this.firestore.collection('timetable');
    timetableRef.doc(id.toUpperCase()).set({ name: content.prog_name });
    timetableRef
      .doc(id.toUpperCase())
      .collection(content.timetable_type)
      .doc(content.semester)
      .set({ url: content.url, semester: content.semester })
      .then(docref => {
        this.snackBar.open('Added Successfully', 'Ok', {
          duration : 2000
        });
        console.log('Added successfully');
      })
      .catch(error => console.log('Error : Adding Timetable'));
  }

  getTimeTable(): Observable<Program[]> {
    // using vanilla firebse method
    /* this.firestore.collection('timetable').get().subscribe((querySnapshot) => {
      querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, ' => ', doc.data());
      });
    }); */

    // using angularFire2 method
    return this.firestore
      .collection('timetable')
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const id = a.payload.doc.id;
            const theory = this.getTheoryTimeTable(id);
            const practical = this.getPracticalTimeTable(id);
            const data = a.payload.doc.data() as { name: string };
            return { id, ...data, theory, practical };
          })
        )
      );
  }

  getTheoryTimeTable(id: string) {
    const theoryRef = this.firestore
      .collection('timetable')
      .doc(id)
      .collection('Theory');
    return theoryRef.valueChanges();
  }

  getPracticalTimeTable(id: string) {
    const practicalRef = this.firestore
      .collection('timetable')
      .doc(id)
      .collection('Practical');
    return practicalRef.valueChanges();
  }

  removeTimetable(id: string, type: string, semester: string): void {
    if (type === 'Theory') {
      this.removeTheoryTimetable(id, semester);
    } else if (type === 'Practical') {
      this.removePracticalTimetable(id, semester);
    } else {
      // Could not delete timetable
    }
  }

  removeTheoryTimetable(program: string, semester: string): void {
    const docRef = this.firestore
      .collection('timetable')
      .doc(program)
      .collection('Theory').doc(semester.toString());
      docRef.delete().then(() => this.snackBar.open('Deleted Successfully', '', {
        duration : 2000
      })).catch(() => this.snackBar.open('Error Deleting Item'));
  }

  removePracticalTimetable(program: string, semester: string): void {
    const docRef = this.firestore
      .collection('timetable')
      .doc(program)
      .collection('Practical').doc(semester.toString());
      docRef.delete().then(() => this.snackBar.open('Deleted Successfully', '', {
        duration : 2000
      })).catch(() => this.snackBar.open('Error Deleting Item'));
  }

  // CRUD operations for the Events
  addEvent(event: GalleryItem) {
    const eventRef = this.firestore.collection<GalleryItem>('events');
    eventRef
      .add(event)
      .then(docRef => console.log('Added Successfully'))
      .catch(error => console.log('Error Adding Document'));
  }

  getEvents() {
    return this.firestore.collection<GalleryItem>('events').valueChanges();
  }

  // CRUD operation methods for Latest News
  addNews(news: News) {
    const newsRef = this.firestore.collection<News>('news');
    newsRef
      .add(news)
      .then(docRef => this.snackBar.open('Added Successfully', '', {
        duration : 2000
      }))
      .catch(error => this.snackBar.open('Error Adding Document', '', {
        duration : 2000
      }));
  }

  getNews(): Observable<News[]> {
    return this.firestore.collection<News>('news').snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as News;
          const id = a.payload.doc.id;
          return { id, ...data};
        });
      }
    ));
  }

  removeNews(id: string) {
    const docRef = this.firestore.doc<News>(`news/${id}`);
    docRef.delete().then(() => this.snackBar.open('Deleted Successfully', '', {
      duration : 2000
    })).catch(() => this.snackBar.open('Error Deleting Item'));
  }

  updateNews(id: string, news: News) {
    const docRef = this.firestore.doc<News>(`news/${id}`);
    docRef.set(news).then(() => this.snackBar.open('Updated Successfully', '', {
      duration : 2000
    })).catch(() => this.snackBar.open('Error Updating Item'));
  }
}
