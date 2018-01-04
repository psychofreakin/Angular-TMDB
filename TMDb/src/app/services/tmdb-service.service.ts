import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TmdbServiceService {

  /*
  private url: string = 'https://api.themoviedb.org/3/'
  private api_key: string = '8801f09e2dd16e2340d51179120bbb82';
  private popular_movies:string = '/discover/movie?sort_by=popularity.desc';
  */

  constructor(private _http: Http) {
    console.log("Service is running");
   }

   getPopularMovies(){
     return this._http.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8801f09e2dd16e2340d51179120bbb82')
                      .map(res => res.json());
   }



}
