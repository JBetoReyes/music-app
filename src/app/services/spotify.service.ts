import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { map } from 'rxjs/operators';
import {a} from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  TOKEN = 'BQAmxORNSCUKtvOwY4g739HAVlEMFJ0qwXp6IBKHUnnP7KNb3R9pRZc8tAV0Mk2_kbZHhJhLIZqmWckTp98';

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

  getArtist(artistId: string) {
    return this.getQuery(`artists/${ artistId }`)
      .pipe(map(data => {
        return data;
      }));
  }

  getTopTracks(artistId: string) {
    return this.getQuery(`artists/${ artistId }/top-tracks?country=us`)
      .pipe(
        map(result => result['tracks'])
      );
  }
}
