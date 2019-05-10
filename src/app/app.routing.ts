import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'buscar', component: BuscarComponent },
    { path: 'buscar/:termino', component: BuscarComponent },
    { path: 'pelicula/:id/:pag', component: PeliculaComponent },
    { path: 'pelicula/:id/:pag/:termino', component: PeliculaComponent },
    { path: '**', component: HomeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
