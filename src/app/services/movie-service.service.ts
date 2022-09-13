import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { MovieResponse } from '../models/movie.model';


@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  baseUrl = 'https://www.omdbapi.com/?t=';
  apiKey = 'd36228d8';


  constructor(private http:HttpClient) { }


  getMovie(movieName:string){
    return this.http.get(`${this.baseUrl}${movieName}&apikey=${this.apiKey}`)
  }
}
