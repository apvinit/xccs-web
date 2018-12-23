import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { Info } from './model/info';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  infoRef : AngularFirestoreDocument<Info>;

  info : Observable<Info>;
  
  constructor(private firestore: AngularFirestore) { 
    this.infoRef = this.firestore.collection('about').doc('info');
  }

  getInfo(){
    this.info = this.infoRef.valueChanges();
    return this.info;
  }
}
