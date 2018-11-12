import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './views/header/header.component';
import {MyMaterialModule} from './my-material/my-material.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DragAndDropDirective } from './directives/drag-and-drop.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MyMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [HeaderComponent, DragAndDropDirective],
  exports: [HeaderComponent, MyMaterialModule]
})
export class SharedModule { }
