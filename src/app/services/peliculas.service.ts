import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  // https://www.themoviedb.org/documentation/api - To get your API key.
  private apiKey: string = 'YOURAPIKEYHERE';
  public urlMoviedb: string = 'https://api.themoviedb.org/3';
  public imgUrl: string = 'https://image.tmdb.org/t/p/w500/';
  public peliculas: any[];

  constructor( private _http: HttpClient ) { }

  getPelicula( id: number){
    let url: string = `${ this.urlMoviedb }/movie/${ id }?api_key=${ this.apiKey }&language=es-ES&include_video=false`;

    return this._http.get( url )
              .pipe(map( (data: any) => data ));
  }

  getPopulares(){

    let url: string = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apiKey }&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

    return this._http.get( url )
        .pipe(map( (data: any) => data.results ));
  }

  getPeques(){
    let url: string = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apiKey }&language=es-ES&certification_country=ES&certification.lte=G&sort_by=popularity.desc`;
    
    return this._http.get( url )
        .pipe(map( (data: any) => data.results ));
  }

  getCartelera(){
    let url: string = `https://api.themoviedb.org/3/movie/now_playing?api_key=${ this.apiKey }&language=es-ES&page=1`;
    
    return this._http.get( url )
        .pipe(map( (data: any) => data.results ));
  }

  buscarPelicula( pelicula: string){
    let url: string = `https://api.themoviedb.org/3/search/movie?api_key=${ this.apiKey }&language=es-ES&query=${pelicula}&page=1`;

    
    return this._http.get( url )
               .pipe(map((data: any) => {
                this.peliculas = data.results;
                return data.results;
                }));
  }
}
