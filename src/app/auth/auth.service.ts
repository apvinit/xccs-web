import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user;

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.user.subscribe((user) => {
      this.user = user;
    });
   }

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then((user) => {
        console.log(user);
        this.user = user;
      }
    ).catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
