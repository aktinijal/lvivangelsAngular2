import { Component, OnInit, Input, NgZone } from '@angular/core';
import { DatabaseService } from '../../../services/database/database.service';
import { NewsConstructor } from '../../../classes/newsConstructor'

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  news: any = [];

  @Input('sendetCount') count: number;

  constructor(private ds : DatabaseService, private zone: NgZone) {
    this.getNews();
  }

  ngOnInit() {
  }

  getNews() {
    this.ds.getNews().then((snapshot) => {
      let newsArr = snapshot.val();
      this.ds.newIndex = newsArr.length;
      this.news = [];
      let newNews = [];
      let loop = this.count != 0 ? this.count : newsArr.length;
    for (let i = 0; i < loop; i++) {
        let thisNew = newsArr[i];
        let description = thisNew.description.split('<br/>');
        let newItem = new NewsConstructor(
          thisNew.title,
          thisNew.date,
          thisNew.year,
          thisNew.location,
          description,
          thisNew.src,
          false
        )
        newNews.unshift(newItem)
      }
      this.zone.run(() => {
        this.news = newNews;
      })
    })
  }

  openNew(thisNew) {
    if(thisNew.open == true) {
      thisNew.open = false
    } else {
      thisNew.open = true;
    }
  }

}
