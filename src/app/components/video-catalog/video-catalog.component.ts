import {Component, OnInit} from '@angular/core';
import {VideoCatalogService} from './services/video-catalog.service';
import {MatDialog} from '@angular/material';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';

@Component({
  selector: 'app-video-catalog',
  templateUrl: './video-catalog.component.html',
  styleUrls: ['./video-catalog.component.scss']
})
export class VideoCatalogComponent implements OnInit {
  movies = [];

  constructor(
    private _movieService: VideoCatalogService,
    private _dialog: MatDialog,
  ) { }

  ngOnInit() {
    this._movieService.getVideos().subscribe(response => {
      this.movies = response['results'];
    });
  }

  getMovieDetails(id: number) {
    this._movieService.getCurrentMovieInformation(id).subscribe(result => {
      this._dialog.open(MovieDetailComponent, {data: {movieDetails: result}});
    });
  }

}
