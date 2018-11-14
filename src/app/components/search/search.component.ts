import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artists = [];

  constructor(private _spotifyService: SpotifyService) { }

  search(searchTerm: string) {
    this._spotifyService.getArtists(searchTerm).subscribe((artists) => {
      this.artists = artists;
    });
  }

}
