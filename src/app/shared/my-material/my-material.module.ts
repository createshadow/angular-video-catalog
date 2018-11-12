import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCardModule, MatDialogModule, MatGridListModule, MatMenuModule, MatToolbarModule} from '@angular/material';

const materialModules = [
  MatDialogModule,
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule,
  MatGridListModule,
  MatCardModule,
];

@NgModule({
  imports: [
    CommonModule,
    materialModules
  ],
  declarations: [],
  exports: [materialModules]
})
export class MyMaterialModule { }
