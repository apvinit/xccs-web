import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';
import { Observable } from 'rxjs';
import { News } from 'src/app/model/news';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) { }

  newsItems$: Observable<News[]>;
  ngOnInit() {
    this.newsItems$ = this.firebaseService.getNews();
  }

  delete(id: string): void {
    this.firebaseService.removeNews(id);
  }
}
