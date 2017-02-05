import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder, private as: AuthService, private router: Router) {
    this.form = fb.group({
      email: [''],
      password: ['']
    });
  }

  logIn(f) {
    this.as.loginWithPassword(
      f.value.email,
      f.value.password).catch((error) => {
        console.log(error)
      }).then(() => {
          this.router.navigateByUrl('');
      });

  }


}
