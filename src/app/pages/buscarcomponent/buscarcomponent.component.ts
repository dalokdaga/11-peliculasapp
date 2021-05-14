import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarteleraResponse, Movi } from 'src/app/models/carterleraResponse';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscarcomponent',
  templateUrl: './buscarcomponent.component.html',
  styleUrls: ['./buscarcomponent.component.css']
})
export class BuscarcomponentComponent implements OnInit {
  movies: Movi[] = [];
  texto: string= '';
  constructor( private activatedRoute: ActivatedRoute,
               private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params =>{
      //TODO: llamar el servicio
      this.texto = params.texto;
      this.peliculasService.buscarPeliculas(params.texto)
          .subscribe(resp =>{
            this.movies = resp;
          })
    })
  }

}
