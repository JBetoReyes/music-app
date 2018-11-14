import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  TOKEN = 'BQCfBv_Ak5QhGruOQ8uEPMmfioS6ZyT0impnwd1wuT2wbZcavVRK0wAsoUkepgJPevyYHulg6m61TO0dsbc';

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
}
