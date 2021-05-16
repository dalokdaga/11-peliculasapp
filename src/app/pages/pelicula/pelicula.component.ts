import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarRatingComponent } from 'ng-starrating';
import Swal from 'sweetalert2'
import { MoviesResponse } from 'src/app/models/movie-response';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Cast } from 'src/app/models/creditosResponse';
import { combineLatest } from 'rxjs/operators';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  public pelicula: MoviesResponse;
  public cast: Cast[];
  constructor(private activateRouter: ActivatedRoute,
              private peliculasServices: PeliculasService,
              private location: Location,
              private router: Router) { }

  ngOnInit(): void {
    const { id } = this.activateRouter.snapshot.params;
    //console.log(this.activateRouter.snapshot.params.id)
    this.peliculasServices.getPeliculaDetalle(id)
        .subscribe(movie => {          
          if (!movie) {
            this.router.navigateByUrl('/')
            return;
          }
          this.pelicula = movie;
        })
    this.peliculasServices.getCreditos(id)
        .subscribe(cast =>{
          this.cast = cast.filter( cast=>cast.profile_path != null);
          
        })    
  }
  onRegresar(){
    this.location.back();
  }
  
  mensajeError(texto:string){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: texto     
    })
  }
}
