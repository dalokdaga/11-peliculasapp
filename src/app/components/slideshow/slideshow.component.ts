import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movi } from 'src/app/models/carterleraResponse';
import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  @Input() movies: Movi[];
  swiper: Swiper;
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,      
    });
  }
  onSlideNext(){
    this.swiper.slideNext()
  }

  onSlidePrev(){
    this.swiper.slidePrev();
  }
}
