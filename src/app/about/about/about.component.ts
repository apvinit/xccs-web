import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';
import { Info } from '../../model/info';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private firebase: FirebaseService) { }
  info: Info;
  ngOnInit() {
    this.firebase.getInfo().subscribe((info: Info) => {
      this.info = info;
    });
  }
}
