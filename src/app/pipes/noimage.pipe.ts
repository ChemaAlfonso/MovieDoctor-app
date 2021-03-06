import { Pipe, PipeTransform } from '@angular/core';
import { Pelicula } from '../interfaces/pelicula';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(pelicula: any, poster: boolean = false): any {

    let url = 'https://image.tmdb.org/t/p/w500/';
    
    if (poster){
      if (pelicula.poster_path){
        return url + pelicula.poster_path;
      } else {
        return 'assets/img/noimage.png';
      }
    }

    if ( pelicula.backdrop_path ){
      return url + pelicula.backdrop_path;
    } else {

      if (pelicula.poster_path){
        return url + pelicula.poster_path;
      } else {
        return 'assets/img/noimage.png';
      }

    }
  }

}
