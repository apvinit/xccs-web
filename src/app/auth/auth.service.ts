import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user;
  public isLoggedIn: boolean;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.user.subscribe((user) => {
      if (user) {
        this.user = user;
        this.isLoggedIn = true;
      }
    });
   }

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then((user) => {
        this.user = user;
        this.isLoggedIn = true;
        this.router.navigate(['/xccs-admin']);
      }
    ).catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
  }

  logout() {
    this.afAuth.auth.signOut();
    this.isLoggedIn = false;
  }
}
