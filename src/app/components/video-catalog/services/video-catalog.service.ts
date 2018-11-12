import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class VideoCatalogService {
  apiKey = 'a4991e824c745145bbc879e10d093e94';
  sessionToken = sessionStorage.getItem('sessionToken');
  apiUrl = 'https://mdrtest.mdreducation.com/ConnectEDListManagerServices/api/ListManager/ConnectEDList/ConnectEDListUpload';
  constructor(
    private _http: HttpClient
  ) {}

  getVideos() {
    return this._http.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&language=en-US&page=1`);
  }

  getCurrentMovieInformation(id: number) {
    return this._http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}&language=en-US`);
  }

  uploadFile(data) {
    const headers = new HttpHeaders().set('SessionToken', this.sessionToken);
    debugger;
    return this._http.post(this.apiUrl, data, {headers: headers});
  }
}
