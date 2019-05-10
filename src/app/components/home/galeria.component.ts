import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: []
})
export class GaleriaComponent implements OnInit {

  @Input( 'peliculas' ) peliculas;

  constructor( private router: Router) {}

  ngOnInit() {
  }

  verPelicula( id: number){
    this.router.navigate(['/pelicula', id, 'home']);
  }

}
