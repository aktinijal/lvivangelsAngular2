import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  
  logged: boolean = this.as.checkAuth()

  constructor(private as: AuthService) {
  }

  ngOnInit() {
  }


}
