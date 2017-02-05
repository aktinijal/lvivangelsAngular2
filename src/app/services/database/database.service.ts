import { Injectable } from '@angular/core';
import * as firebase from "firebase";
import { NewsConstructor } from '../../classes/newsConstructor'

@Injectable()
export class DatabaseService {

  public news: any = [];
  public newIndex: number;
  public photoURL: string;

  constructor() {
    this.getNews()
  }

  getNews() {
    return firebase.database().ref('/news').once('value')
  }

  writeNewData(date, year, title, location, description) {
    return firebase.database().ref('/news/' + this.newIndex).set({
      date: date,
      year: year,
      title: title,
      location: location,
      description: description,
      src: this.photoURL || ''
    });
  }
  writeNewPhoto(newIndex, photo) {
    return firebase.database().ref('/news' + newIndex).set({
      photo: photo
    });
  }
  sendFile(that, file, name, callback) {
    let self = that;
    let uploadTask = firebase.storage().ref().child('images/' + name + '.img').put(file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED:
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING:
            console.log('Upload is running');
            break;
        }
      }, (error) => {
        console.log(error);
      }, () => {
        this.photoURL = uploadTask.snapshot.downloadURL
        callback(self);
      });
  }


}
