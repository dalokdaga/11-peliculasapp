import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import { Movi } from 'src/app/models/carterleraResponse';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit, AfterViewInit {
  @Input() movies: Movi[];
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
       
  }

}
