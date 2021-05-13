import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarteleraResponse } from '../models/carterleraResponse';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private baseUrl: string = 'https://api.themoviedb.org/3'
  private carteleraPage = 1;
  constructor( private http: HttpClient) { }
  get params(){
    return{
      api_key: '50dc5402134c7a49bb2c6bfce18ed79f',
      language:'es-ES',
      page:this.carteleraPage.toString()
    }
  }
  getCartelera():Observable<CarteleraResponse>{
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing`, 
              {params:this.params}).pipe(
                tap(() =>{
                  this.carteleraPage += 1
                }))
  }
}
