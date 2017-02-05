import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { DatabaseService } from '../../../services/database/database.service';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {

  openedAddNew: boolean = false;
  form: FormGroup;
  viewPhoto: boolean = false;
  file: any;
  photoUrl: string;
  newInfo: any = [];

  @Output() reload: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder, private ds: DatabaseService, private as: AuthService) {
    console.log(this.as.isLoggedIn)
    this.form = fb.group({
      date: [''],
      year: [''],
      topic: [''],
      location: [''],
      description: ['']
    });
  }

  ngOnInit() {
  }

  openAddNew() {
    if (this.openedAddNew) {
      this.openedAddNew = false;
    } else {
      this.openedAddNew = true;
    }
  }
  onSubmit(f, event) {
    this.newInfo = f;
    if (this.file) {
      let name = 'news/new ' + f.value.date + f.value.year;
      this.ds.sendFile(this, this.file, name, this.setInfoAndUpdate);
    } else {
      this.setInfoAndUpdate();
    }
    for (let i = 0; i <= event.currentTarget.length; i++) {
      if (event.currentTarget[i]) {
        event.currentTarget[i].value = null;
      }
    }
    this.photoUrl = '';
    this.viewPhoto = false;
  }
  setFile(File) {
    this.file = File;
    this.readFiles(File);
  }

  readFile(file, reader, callback) {
    reader.onload = () => {
      callback(reader.result);
    }
    reader.readAsDataURL(file);
  }

  readFiles(file) {
    let reader = new FileReader();
    if (file) {
      this.readFile(file, reader, (result) => {
        this.photoUrl = result;
        this.viewPhoto = true;
      });
    }
  }
  setInfoAndUpdate(self = this) {
    let f = self.newInfo;
    let description = f.value.description.split("\n").join('<br/>');
    self.ds.writeNewData(f.value.date, f.value.year, f.value.topic, f.value.location, description).then(() => {
      self.reload.emit('some');
    })
    f.value.date = '';
  }

}
