import { Component } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBRAmjnWaF1w6qH0kC1yazgGhsL76-uD_E',
      authDomain: 'lvivangelsangula2.firebaseapp.com',
      databaseURL: 'https://lvivangelsangula2.firebaseio.com',
      storageBucket: 'lvivangelsangula2.appspot.com',
      messagingSenderId: '759240913246'
    });
    
  }
  
}
