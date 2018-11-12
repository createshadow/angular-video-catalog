import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainPageComponent} from './main-page.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {VideoCatalogService} from '../video-catalog/services/video-catalog.service';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {FileDropModule} from 'ngx-file-drop';

const routes: Routes = [{
  path: '', component: MainPageComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FileDropModule
  ],
  declarations: [MainPageComponent],
  providers: [VideoCatalogService]
})
export class MainPageModule { }
