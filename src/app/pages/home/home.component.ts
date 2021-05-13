import { Component, HostListener, OnInit } from '@angular/core';
import { Movi } from 'src/app/models/carterleraResponse';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public movies: Movi[] = [];
  public moviesSlideshow: Movi[] = []
  @HostListener('window:scroll', ['$event'])
  onScroll(){
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.documentElement.scrollHeight)    

    if (pos > max) {
      this.peliculasService.getCartelera().subscribe(resp =>{
        this.movies.push(...resp.results)
      })
    }
  }
  constructor(private peliculasService: PeliculasService) {

   }

  ngOnInit(): void {
    this.peliculasService.getCartelera()
    .subscribe((resp) => {
      //console.log(resp.results)
      this.movies = resp.results;      
      this.moviesSlideshow = resp.results;      
    })
  }

}
