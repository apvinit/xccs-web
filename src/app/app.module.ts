import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Firebase
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';

import { MaterialModule } from './material.module'

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Feature Modules
import { AboutModule } from './about/about.module';
import { AdminModule } from './admin/admin.module';
import { HomeModule } from './home/home.module';
import { CoursesModule } from './courses/courses.module';
import { TimeTableModule } from './time-table/time-table.module';
import { GalleryModule } from './gallery/gallery.module';
import { ContactModule } from './contact/contact.module';
import { SharedModule } from './shared/shared.module';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    MaterialModule,
    FlexLayoutModule,
    AboutModule,
    AdminModule,
    HomeModule,
    CoursesModule,
    TimeTableModule,
    GalleryModule,
    ContactModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
