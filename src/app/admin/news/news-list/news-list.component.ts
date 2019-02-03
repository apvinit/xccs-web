import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';
import { Observable } from 'rxjs';
import { News } from 'src/app/model/news';
import { MatDialog } from '@angular/material';
import { AddNewsComponent } from '../add-news/add-news.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  constructor(
    private firebaseService: FirebaseService,
    private dialog: MatDialog
  ) {}

  newsItems$: Observable<News[]>;
  ngOnInit() {
    this.newsItems$ = this.firebaseService.getNews();
  }

  edit(newsItem: News): void {
    const editNewsDialogRef = this.dialog.open(AddNewsComponent, {
      width: '400px',
      data: { edit : 'true', newsItem: newsItem as News }
    });

    editNewsDialogRef.afterClosed().subscribe(result => { });
  }

  askDeleteConfirmation(id: string): void {
    const confirmationRef = this.dialog.open(ConfirmationDialogComponent);
    confirmationRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete(id);
      }
    });
  }

  delete(id: string): void {
    this.firebaseService.removeNews(id);
  }
}
