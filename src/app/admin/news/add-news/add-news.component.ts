import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FirebaseService } from 'src/app/firebase.service';
import { News } from 'src/app/model/news';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {

  newsForm = new FormGroup({
    link : new FormControl(''),
    title : new FormControl('')
  });
  constructor(
    private firebaseService: FirebaseService,
    public dialogRef: MatDialogRef<AddNewsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  newsItem: News;
  editMode: boolean;

  ngOnInit() {
    if (this.data !== null) {
      this.editMode = this.data.edit;
      this.newsItem = this.data.newsItem;
      this.newsForm.controls['link'].patchValue(this.newsItem.link);
      this.newsForm.controls['title'].patchValue(this.newsItem.title);
    }
  }

  onSubmit() {
    if (this.editMode) {
      this.updateNews(this.data.newsItem.id, this.newsForm.value);
    } else {
      this.addNews(this.newsForm.value);
    }
  }

  addNews(news: News) {
    this.firebaseService.addNews(news);
    this.newsForm.reset();
    this.dialogRef.close();
  }

  updateNews(id: string, news: News) {
    this.firebaseService.updateNews(id, news);
    this.newsForm.reset();
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
