import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Firebase
import { AngularFireModule } from '@angular/fire'
import { environment } from 'src/environments/environment';

import { MatToolbarModule } from '@angular/material/toolbar';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Feature Modules
import { AboutModule } from './about/about.module'
import { AdminModule } from './admin/admin.module'

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    MatToolbarModule,
    AboutModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
