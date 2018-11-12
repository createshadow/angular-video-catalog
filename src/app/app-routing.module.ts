import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './components/main-page/main-page.module#MainPageModule'},
  {path: 'video-catalog', loadChildren: './components/video-catalog/video-catalog.module#VideoCatalogModule'},
  {path: 'about-us', loadChildren: './components/about-us/about-us.module#AboutUsModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
