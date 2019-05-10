import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

// Routes
import { AppRoutingModule } from './app.routing';

// Components
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

// Pipes
import { ShortextPipe } from './pipes/shortext.pipe';
import { NoimagePipe } from './pipes/noimage.pipe';
import { GaleriaComponent } from './components/home/galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BuscarComponent,
    ShortextPipe,
    PeliculaComponent,
    NoimagePipe,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientJsonpModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
