import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() {}
  public prominentPersons: Person[] = [
    {
      name: 'Rector',
      description: 'Rector, St. Xavier\'s School',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/xccs-0516p.appspot.com/o/staffs%2Frector.jpg?alt=media&token=b5fbf909-fc21-4e80-abab-6764ddff8917'
    },
    {
      name: 'Christu Savarirajan',
      description: 'Principal, St. Xavier\'s School',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/xccs-0516p.appspot.com/o/staffs%2Fprincipal.jpg?alt=media&token=5ff50867-6587-4602-af0c-b6396f3aba6d'
    },
    {
      name: 'Dr. Abhilash Nayak',
      description: 'Regional Director, IGNOU',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/xccs-0516p.appspot.com/o/staffs%2FrdPatna.jpg?alt=media&token=1a8648f5-422b-4879-962f-7e07fd06ec51'
    },
    {
      name: 'Md. Shams Raza',
      description: 'Programme Incharge 0516P',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/xccs-0516p.appspot.com/o/staffs%2Fcoordinator.jpg?alt=media&token=1204a420-2bbf-4efe-b397-1966d35cd8f1'
    }
  ];
  ngOnInit() {}
}
