import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../../services/database/database.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private ds: DatabaseService) {
  }

  ngOnInit() {
  }

}
