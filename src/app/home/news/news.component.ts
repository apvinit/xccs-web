import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/model/news';
import { FirebaseService } from 'src/app/firebase.service';
import { Observable } from 'rxjs';
import { DocumentChangeAction } from '@angular/fire/firestore';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news$: Observable<News[]>;
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.news$ = this.firebaseService.getNews();
  }

}
