import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.scss']
})
export class GalleryDetailComponent implements OnInit {

  constructor() { }

  public images = [
    'https://www.w3schools.com/howto/img_forest.jpg',
    'https://www.w3schools.com/howto/img_forest.jpg',
    'https://www.w3schools.com/howto/img_forest.jpg',
    'https://www.w3schools.com/howto/img_forest.jpg',
    'https://www.w3schools.com/howto/img_forest.jpg',
    'https://www.w3schools.com/howto/img_forest.jpg',
    'https://www.w3schools.com/howto/img_forest.jpg',
    'https://www.w3schools.com/howto/img_forest.jpg',
    'https://www.w3schools.com/howto/img_forest.jpg',
    'https://www.w3schools.com/howto/img_forest.jpg',
    'https://www.w3schools.com/howto/img_forest.jpg',
    'https://www.w3schools.com/howto/img_forest.jpg',
    'https://www.w3schools.com/howto/img_forest.jpg',
    'https://www.w3schools.com/howto/img_forest.jpg'
  ];

  ngOnInit() {
  }

}
