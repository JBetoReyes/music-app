import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'trackURI'
})
export class TrackPipe implements PipeTransform {

  static url = 'https://open.spotify.com/embed/track/';
  static regex = /spotify:track:(.*)/;

  constructor(private _domSanitazer: DomSanitizer) { }

  transform(rawUri: any): any {
    let uri = '';
    if (TrackPipe.regex.test(rawUri)) {
      uri = rawUri.match(TrackPipe.regex)[1];
    }
    return this._domSanitazer.bypassSecurityTrustResourceUrl( `${ TrackPipe.url }${ uri }`);
  }

}
