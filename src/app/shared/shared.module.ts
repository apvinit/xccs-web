import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MaterialModule } from '../material.module';
import { FooterComponent } from './footer/footer.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    FooterComponent,
    ConfirmationDialogComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule
  ],
  exports : [
    FooterComponent,
    ConfirmationDialogComponent,
    LoginComponent
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ]
})
export class SharedModule { }
