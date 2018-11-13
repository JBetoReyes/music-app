import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _httpClient: HttpClient) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQA7NOf0E5cgWa4gDUxFpXwNjvTF4WJqokD9Kb_YGL92U6lj5n8wuZV69XRsCErroyYn0TxlOCGGa4AQflo',
    });

    return this._httpClient.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
  }
}
