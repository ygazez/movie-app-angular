import { Component, Input, OnInit } from '@angular/core';
import { MovieResponse } from '../models/movie.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favouriteMovies:MovieResponse[] = [];
  constructor() { 
   
  }

  ngOnInit(): void {
    const favLocalMovie = window.localStorage.getItem(('fav'))
    if( favLocalMovie!==null){
      this.favouriteMovies = JSON.parse(favLocalMovie);
    }
  }

}
