import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Pelicula } from 'src/app/interfaces/pelicula';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})
export class PeliculaComponent implements OnInit {

  pelicula: Pelicula;
  id: number;

  constructor( public _peliculasService: PeliculasService,
               public activatedRoute: ActivatedRoute ) { 

  this.id  = this.activatedRoute.snapshot.params.id;

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
}
