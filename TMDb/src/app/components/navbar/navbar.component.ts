import { Component, OnInit } from '@angular/core';
import { TmdbServiceService } from '../../services/tmdb-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  movies: any = [];
  images: any[];
  movieTitle: string;
  constructor(private _tmdbService: TmdbServiceService) { }

  ngOnInit() {
    this._tmdbService.getPopularMovies().subscribe(movie => {
      console.log(movie);
      this.movies = movie;
    })
  }

}
