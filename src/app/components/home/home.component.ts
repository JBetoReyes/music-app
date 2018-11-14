import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  _newReleases: any[] = [];

  constructor(private _spotifySerice: SpotifyService) {
    this._spotifySerice.getNewReleases().subscribe((newReleases) => {
      this._newReleases = newReleases;
    });
  }

}
