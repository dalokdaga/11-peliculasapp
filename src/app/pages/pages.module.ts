import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { BuscarcomponentComponent } from './buscarcomponent/buscarcomponent.component';



@NgModule({
  declarations: [
    HomeComponent, 
    PeliculaComponent, 
    BuscarcomponentComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
