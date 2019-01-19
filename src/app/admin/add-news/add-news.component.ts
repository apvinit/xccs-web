import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

  }
}
