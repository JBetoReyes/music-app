import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artist: any = {};
  topTracks = [];
  loading: boolean;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _spotifyService: SpotifyService
  ) {
    this.loading = true;
    this._activatedRoute.params.subscribe(params => {
      this.getArtist(params.id);
      this.getTopTracks(params.id);
    });
  }

  getArtist(artistId: string) {
    this._spotifyService.getArtist(artistId).subscribe(artist => {
      this.artist = artist;
      this.loading = false;
    });
  }

  getTopTracks(artistId: string) {
    this._spotifyService.getTopTracks(artistId)
      .subscribe(topTracks => {
        console.log(topTracks);
        this.topTracks = topTracks;
      });
  }
}
