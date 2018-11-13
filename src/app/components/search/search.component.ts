import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  _artists = [];

  constructor(private _spotifyService: SpotifyService) { }

  search(searchTerm: string) {
    console.log(searchTerm);
    this._spotifyService.getArtists(searchTerm).subscribe((results) => {
      console.log(results.artists);
      this._artists = results.artists.items;
    });
  }

}
