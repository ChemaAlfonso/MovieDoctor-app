import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


// Servicios
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../interfaces/pelicula';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  termino: string;
  resultados: Pelicula[];

  constructor( public _peliculasService: PeliculasService,
               public route: ActivatedRoute) { 
    this.route.params.subscribe( params  => {
      if (params.termino){
        this.termino = params.termino;
        this.buscarPelicula();
      }
    });
  }

  ngOnInit() {
  }

  buscarPelicula(){

    if (this.termino.length == 0){
      return;
    }

    this._peliculasService.buscarPelicula(this.termino)
        .subscribe(data => {
          this.resultados = data;
        });
  }

}
