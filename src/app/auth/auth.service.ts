import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn = false;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe((authState) => {
      if (authState && authState.uid) {
        this.isLoggedIn = true;
      }
    });
   }

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then((user) => {
        if (user) {
          this.isLoggedIn = true;
          this.router.navigate(['/xccs-admin']);
        }
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
