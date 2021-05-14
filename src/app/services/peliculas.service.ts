import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CarteleraResponse, Movi } from '../models/carterleraResponse';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private baseUrl: string = 'https://api.themoviedb.org/3'  
  private carteleraPage = 1;
  public cargando: boolean = false;
  constructor( private http: HttpClient) { }
  get params(){
    return{
      api_key: '50dc5402134c7a49bb2c6bfce18ed79f',
      language:'es-ES',
      page:this.carteleraPage.toString()
    }
  }
  resetCartelera(){
    this.carteleraPage = 1;
  }
  // getCartelera():Observable<CarteleraResponse>{
  //   if (this.cargando) {
  //     return;
  //   }
  //   console.log("cargando api")
  //   this.cargando = true;
  //   return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing`, 
  //             {params:this.params}).pipe(
  //               tap(() =>{
  //                 this.carteleraPage += 1
  //                 this.cargando = false;
  //               }))
  // }

    getCartelera():Observable<Movi[]>{
    if (this.cargando) {
      return of([]);
    }
    
    this.cargando = true;                        
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing`, 
              {params:this.params}).pipe(
                map((resp)=>resp.results),
                tap(() =>{
                  this.carteleraPage += 1
                  this.cargando = false;
                }))
  }

  buscarPeliculas( texto: string):Observable<Movi[]>{
    const params = {...this.params, query: texto ,page:'1',}
    // https://api.themoviedb.org/3/search/movie?api_key=50dc5402134c7a49bb2c6bfce18ed79f&language=es-ES&query=avenger&page=1&include_adult=false
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/search/movie`,{params})
            .pipe(
              map(resp => resp.results)
            )
  }
}
