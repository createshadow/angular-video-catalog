import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VideoCatalogComponent} from './video-catalog.component';
import {VideoCatalogRoutingModule} from './video-catalog-routing.module';
import {VideoCatalogService} from './services/video-catalog.service';
import {SharedModule} from '../../shared/shared.module';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';

@NgModule({
  imports: [
    CommonModule,
    VideoCatalogRoutingModule,
    SharedModule
  ],
  declarations: [VideoCatalogComponent, MovieDetailComponent],
  providers: [VideoCatalogService],
  entryComponents: [MovieDetailComponent]
})
export class VideoCatalogModule { }
