import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Cast } from 'src/app/models/creditosResponse';
import Swiper from 'swiper';

@Component({
  selector: 'app-cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styleUrls: ['./cast-slideshow.component.css']
})
export class CastSlideshowComponent implements OnInit, AfterViewInit {
  @Input() cast: Cast[];
  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    console.log(this.cast);
    const swiper = new Swiper('.swiper-container',{
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15
    });
  }
}
