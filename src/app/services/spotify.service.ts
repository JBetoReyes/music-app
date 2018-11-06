import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _httpClient: HttpClient) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBgAcCaUkj3O5lsD3T2cBYmejPiCH1Kux_oWJCh_HaPH5d_ycJnhFd_S0gSQzJ_8sAbcrtAWnfw-_X0Vxs',
    });

    this._httpClient.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
