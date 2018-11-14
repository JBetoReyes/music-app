import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  newReleases: any[] = [];
  loading: boolean;

  constructor(
    private _spotifySerice: SpotifyService,
    private _router: Router
  ) {
    this.loading = true;
    this._spotifySerice.getNewReleases().subscribe((newReleases) => {
      this.newReleases = newReleases;
      this.loading = false;
    });
  }

  seeArtist(item) {
    this._router.navigate(['artist', item.artists[0].id]);
  }

}
