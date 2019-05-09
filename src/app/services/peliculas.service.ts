import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiKey: string = '';
  public urlMoviedb: string = 'https://api.themoviedb.org/3';
  public imgUrl: string = 'https://image.tmdb.org/t/p/w500/';

  constructor( private _http: HttpClient ) { }

  getPelicula( id: number){
    let url: string = `${ this.urlMoviedb }/movie/${ id }?api_key=${ this.apiKey }&language=es-ES`;

    return this._http.get( url )
              .pipe(map( (data: any) => data));
  }

  getPopulares(){

    let url: string = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apiKey }&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

    return this._http.get( url )
        .pipe(map( (data: any) => data ));
  }

  getPeques(){
    let url: string = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apiKey }&language=es-ES&certification_country=ES&certification.lte=G&sort_by=popularity.desc`;
    
    return this._http.get( url )
        .pipe(map( (data: any) => data ));
  }

  getCartelera(){
    let url: string = `https://api.themoviedb.org/3/movie/now_playing?api_key=${ this.apiKey }&language=es-ES&page=1`;
    
    return this._http.get( url )
        .pipe(map( (data: any) => data ));
  }

  buscarPelicula( pelicula: string){
    let url: string = `https://api.themoviedb.org/3/search/movie?api_key=${ this.apiKey }&query=${ pelicula }`;

    return this._http.get( url )
               .pipe(map((data: any) => data));
  }
}
