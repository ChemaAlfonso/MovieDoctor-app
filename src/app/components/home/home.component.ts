import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from 'src/app/interfaces/pelicula';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  populares: Pelicula[] = [];
  cartelera: Pelicula[] = [];
  peques: Pelicula[] = [];

  constructor( public _peliculasService: PeliculasService ) {}

  ngOnInit() {
    this.getPopulares();
    this.getCartelera();
    this.getPeques();
  }

  getPopulares(){
    this._peliculasService.getPopulares()
    .subscribe( data => {
      this.populares = data.results;
      console.log(this.populares);
    });
  }

  getCartelera(){
    this._peliculasService.getCartelera()
    .subscribe( data => {
      this.cartelera = data.results;
    });
  }

  getPeques(){
    this._peliculasService.getPeques()
    .subscribe( data => {
      this.peques = data.results;
    });
  }

}
