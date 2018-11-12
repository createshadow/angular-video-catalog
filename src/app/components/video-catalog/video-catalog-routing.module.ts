import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VideoCatalogComponent} from './video-catalog.component';

const routes: Routes = [
  {path: '', component: VideoCatalogComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoCatalogRoutingModule { }
