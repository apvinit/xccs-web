import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddNewsComponent } from '../add-news/add-news.component';

@Component({
  selector: 'app-manage-news',
  templateUrl: './manage-news.component.html',
  styleUrls: ['./manage-news.component.scss']
})
export class ManageNewsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openAddNewsDialog(): void {
    const addNewsDialogRef = this.dialog.open(AddNewsComponent, {
      width: '400px'
    });
  }

}
