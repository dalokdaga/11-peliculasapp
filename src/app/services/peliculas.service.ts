import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarteleraResponse } from '../models/carterleraResponse';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor( private http: HttpClient) { }

  getCartelera():Observable<CarteleraResponse>{
    return this.http.get<CarteleraResponse>('https://api.themoviedb.org/3/movie/now_playing?api_key=50dc5402134c7a49bb2c6bfce18ed79f&language=es-ES&page=1')
  }
}
