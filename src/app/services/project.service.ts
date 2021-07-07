import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})


export class ProjectService {

  private readonly apiKey = environment.FLICKR_API_KEY;

  constructor(private http: HttpClient) { }
  imagesUrl = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${this.apiKey}&photoset_id=72157719438120028&format=json&JSONP_CALLBACK=?&nojsoncallback=1`;


  getPhotos() {
    //return this.http.jsonp(this.imagesUrl, 'JSONP_CALLBACK');
    return this.http.get(this.imagesUrl);
  }

  getDesert() {
    return this.http.get(`https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${this.apiKey}&photoset_id=72157718167654902&format=json&JSONP_CALLBACK=?&nojsoncallback=1`);
  }

  getFilm() {
    return this.http.get(`https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${this.apiKey}&photoset_id=72157712745023826&format=json&JSONP_CALLBACK=?&nojsoncallback=1`);
  }
}
