import { Component, Input, OnInit } from '@angular/core';
import { Movi } from 'src/app/models/carterleraResponse';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  @Input() movies: Movi[];
  constructor() { }

  ngOnInit(): void {
    console.log(this.movies);
  }

}
