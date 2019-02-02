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

  ngOnInit() {
  }

  onSubmit() {
    this.addNews(this.newsForm.value);
  }

  addNews(news: News) {
    console.log(news);
    this.firebaseService.addNews(news);
    this.newsForm.reset();
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
