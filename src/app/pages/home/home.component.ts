import { Component, OnInit } from '@angular/core';
import { Movi } from 'src/app/models/carterleraResponse';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public movies: Movi[] = [];
  constructor(private peliculasService: PeliculasService) {

   }

  ngOnInit(): void {
    this.peliculasService.getCartelera()
    .subscribe((resp) => {
      //console.log(resp.results)
      this.movies = resp.results;
    })
  }

}
