import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  TOKEN = 'BQCVxubPEEHTHiJmwrECFTexK9zTnh1uWHn4Mc8c3mcW4o8CPkNclP4XK5x30u0XzP5M7O9WBBGH0yCh-zI';

  constructor(private _httpClient: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.TOKEN}`,
    });

    return this._httpClient.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
      .pipe( map((data) => {
          return data['albums'].items;
        }));
  }

  getArtists(searchTerm) {
    return this.getQuery(`search?q=${searchTerm}&type=artist`)
      .pipe(map(data => {
        return data['artists'].items;
      }));
  }
}
