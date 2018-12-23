import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule
  ],
  exports : [
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class MaterialModule { }
