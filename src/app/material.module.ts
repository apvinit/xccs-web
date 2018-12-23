import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    MatSidenavModule,
    MatButtonModule
  ],
  exports : [
    MatSidenavModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
