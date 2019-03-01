import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  private prominentPersons: Person[] = [
    { name: "Rector", description: "Rector, St. Xavier's School", imageUrl: "http://0516p.info/imp%20img/rec.jpg"},
    { name: "Christu Savarirajan", description: "Principal, St. Xavier's School", imageUrl: "http://0516p.info/imp%20img/pr.jpg"},
    { name: "Dr. Abhilash Nayak", description: "Regional Director, IGNOU", imageUrl: "http://0516p.info/imp%20img/rdPatna.jpg"},
    { name: "Md. Shams Raza", description: "Programme Incharge 0516P", imageUrl: "http://0516p.info/imp%20img/sir.jpg"},
  ]
  ngOnInit() {
  }

}
