import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../services/movie-service.service';
import { ContentLoaderModule } from '@ngneat/content-loader';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movie: any;
  moviename: any;
  isFavorite:boolean = false;
  isFavoritePage:boolean = false;

  favouritesMovie: any[] = [];

  constructor(private movieService: MovieServiceService) {}
  
  ngOnInit(): void {}
 
  onClick(): void {
    this.movieService.getMovie(this.moviename).subscribe((movies) => {
      this.movie = movies;
      console.log(this.movie);
    });
  }
  keyEnter(event:any) {
   console.log(event.target.value)
   this.onClick();
  }
  addFavourite():void{
   
    this.favouritesMovie.push(this.movie);
    window.localStorage.setItem('fav', JSON.stringify(this.favouritesMovie))
   
    
    console.log("test",this.favouritesMovie)
    
  }

  changePage(){
    this.isFavoritePage = !this.isFavoritePage;
  }
  logOutClick():void{
    window.localStorage.clear();
  }
}
