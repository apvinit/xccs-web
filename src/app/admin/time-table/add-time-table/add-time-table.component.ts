import { Component, OnInit, Inject } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AngularFireUploadTask } from '@angular/fire/storage';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-time-table',
  templateUrl: './add-time-table.component.html',
  styleUrls: ['./add-time-table.component.scss']
})
export class AddTimeTableComponent implements OnInit {
  timetableForm = new FormGroup({
    prog_id: new FormControl('', Validators.required),
    prog_name: new FormControl('', Validators.required),
    timetable_type: new FormControl('', Validators.required),
    semester: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required)
  });

  // Variables
  prog_name: string;
  semester: string;
  timetable_type: string;

  types = [
    { value: 'Theory', viewValue: 'Theory' },
    { value: 'Practical', viewValue: 'Practical' }
  ];

  semesters = [
    { value: '1', viewValue: 'Semester 1' },
    { value: '2', viewValue: 'Semester 2' },
    { value: '3', viewValue: 'Semester 3' },
    { value: '4', viewValue: 'Semester 4' },
    { value: '5', viewValue: 'Semester 5' },
    { value: '6', viewValue: 'Semester 6' }
  ];

  task: AngularFireUploadTask;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  constructor(
    private firebaseService: FirebaseService,
    public dialogRef: MatDialogRef<AddTimeTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  uploadFile(event): any {
    this.prog_name = this.timetableForm.get('prog_id').value;
    this.semester = this.timetableForm.get('semester').value;
    this.timetable_type = this.timetableForm.get('timetable_type').value;

    const filePath =
      'Timetable/' +
      this.prog_name.toUpperCase() +
      '/' +
      this.timetable_type +
      '/' +
      'sem_' +
      this.semester;
    console.log(filePath);

    const fileRef = this.firebaseService.getStorageRef(filePath);
    this.task = this.firebaseService.uploadFile(
      filePath,
      event.target.files[0]
    );
    // observe percentage changes
    this.uploadPercent = this.task.percentageChanges();
    // get notified when the download URL is available
    this.task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url =>
            this.timetableForm.patchValue({ url: url })
          );
        })
      )
      .subscribe();
  }

  onSubmit() {
    const id = this.timetableForm.get('prog_id').value;
    const data = {
      prog_name: this.timetableForm.get('prog_name').value,
      timetable_type: this.timetableForm.get('timetable_type').value,
      semester: this.timetableForm.get('semester').value,
      url: this.timetableForm.get('url').value
    };

    this.firebaseService.addTimeTable(id, data);
    this.timetableForm.reset();
    this.dialogRef.close();
  }
}
