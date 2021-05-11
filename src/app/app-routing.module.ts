import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarcomponentComponent } from './pages/buscarcomponent/buscarcomponent.component';
import { HomeComponent } from './pages/home/home.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'pelicula/:id',
    component:PeliculaComponent
  },
  {
    path: 'buscar/:texto',
    component:BuscarcomponentComponent
  },
  {
    path: '**',
    redirectTo:'/home'    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
