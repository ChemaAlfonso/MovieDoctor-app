import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Interfaces
import { Pelicula } from 'src/app/interfaces/pelicula';

// Servicios
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})
export class PeliculaComponent implements OnInit {

  pelicula: Pelicula;
  id: number;
  pag: string;
  termino: string;

  constructor( public _peliculasService: PeliculasService,
               public activatedRoute: ActivatedRoute,
               public router: Router ) { 

  this.activatedRoute.params.subscribe(data => {
    this.id = data.id;
    this.pag = data.pag;

    if (data.termino){
      this.termino = data.termino;
    }

  });

}

  ngOnInit() {
    this.getPelicula();
  }

  getPelicula(){
     return this._peliculasService.getPelicula( this.id )
                 .subscribe( data => {
                   this.pelicula = data;
                 })
  }

  atras(){
    if ( this.pag == 'buscar'){
      this.router.navigate(['/buscar', this.termino]);
    } else {
      this.router.navigate(['/home']);
    }
  }
}
