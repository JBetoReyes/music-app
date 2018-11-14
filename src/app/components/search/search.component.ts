import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artists = [];
  loading: boolean;

  constructor(
    private _spotifyService: SpotifyService,
    private _router: Router
  ) { }

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

  seeArtist(item) {
    this._router.navigate(['artist', item.id]);
  }

}
