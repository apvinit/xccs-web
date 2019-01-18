import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/model/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news : News[] = [
    {link: '/time-table', title: 'Some title for some links in the latest news section'},
    {link: '/time-table', title: 'Some title for some links in the latest news section'},
    {link: '/time-table', title: 'Some title for some links in the latest news section'},
    {link: '/time-table', title: 'Some title for some links in the latest news section'},
    {link: '/time-table', title: 'Some title for some links in the latest news section'},
    {link: '/time-table', title: 'Some title for some links in the latest news section'},
    {link: '/time-table', title: 'Some title for some links in the latest news section'},
    {link: '/time-table', title: 'Some title for some links in the latest news section'},
    {link: '/time-table', title: 'Some title for some links in the latest news section'},
    {link: '/time-table', title: 'Some title for some links in the latest news section'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
