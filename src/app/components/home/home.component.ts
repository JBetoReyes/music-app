import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  newReleases: any[] = [];
  loading: boolean;

  constructor(private _spotifySerice: SpotifyService) {
    this.loading = true;
    this._spotifySerice.getNewReleases().subscribe((newReleases) => {
      this.newReleases = newReleases;
      this.loading = false;
    });
  }

}
