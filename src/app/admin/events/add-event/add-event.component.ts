import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { FirebaseService } from 'src/app/firebase.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireUploadTask } from '@angular/fire/storage';
import { Event_ } from '../../../model/event';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  eventForm = new FormGroup({
    title: new FormControl(''),
    subtitle: new FormControl(''),
    description: new FormControl('')
  });

  uploading = null;
  uploaded = false;

  // Variables
  title: string;
  subtitle: string;
  description: string;
  images: string[] = [];

  uploadPercent: Observable<number>;
  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {}

  uploadFile(event) {
    const files = event.target.files;
    this.title = this.eventForm.get('title').value;

    for (let i = 0; i < files.length; i++) {
      let task: AngularFireUploadTask;
      const file = files[i];
      const filePath = 'Events/' + this.title + '/' + file.name;
      const fileRef = this.firebaseService.getStorageRef(filePath);
      task = this.firebaseService.uploadFile(filePath, file);
      this.uploading = true;
      task.percentageChanges().subscribe((value: number) => {
        if (value === 100) {
          this.uploading = false;
        }
      });

      // observe percentage changes
      this.uploadPercent = task.percentageChanges();
      // get notified when the download URL is available
      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe(url => {
              this.images.push(url);
              this.uploaded = true;
            });
          })
        )
        .subscribe();
    }
  }

  onSubmit() {
    this.title = this.eventForm.get('title').value;
    this.subtitle = this.eventForm.get('subtitle').value;
    this.description = this.eventForm.get('description').value;

    const event: Event_ = {
      title: this.title,
      subtitle: this.subtitle,
      description: this.description,
      thumbnail: this.images[0],
      images: this.images
    };

    this.firebaseService.addEvent(event);
  }
}
