import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artists = [];
  loading: boolean;

  constructor(private _spotifyService: SpotifyService) { }
  search(searchTerm: string) {
    if (searchTerm && searchTerm !== '') {
      this.loading = true;
      this._spotifyService.getArtists(searchTerm).subscribe((artists) => {
        this.loading = false;
        this.artists = artists;
      });
    } else if (searchTerm === '') {
      this.artists = [];
    }
  }

}
