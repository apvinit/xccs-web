import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FirebaseService } from 'src/app/firebase.service';
import { News } from 'src/app/model/news';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {

  newsForm = new FormGroup({
    link : new FormControl(''),
    title : new FormControl('')
  })
  constructor(private firebaseService : FirebaseService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.addNews(this.newsForm.value);
  }

  addNews(news : News){
    console.log(news);
    this.firebaseService.addNews(news);
    this.newsForm.reset();
  }
}
