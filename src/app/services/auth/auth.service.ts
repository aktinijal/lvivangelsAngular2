import { Injectable } from '@angular/core';
import * as firebase from "firebase";

@Injectable()
export class AuthService {

  public isLoggedIn: boolean;
  user: any = firebase.auth().currentUser;

  constructor() {
    console.log('go')
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true;
        console.log("User is signed in.")
      } else {
        this.isLoggedIn = false;
        console.log("No user is signed in.")
      }
    });
  }
  checkAuth() {
    if (this.isLoggedIn == true) {
      return true;
    } else {
      return false;
    }
  }

  loginWithPassword(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }

}
