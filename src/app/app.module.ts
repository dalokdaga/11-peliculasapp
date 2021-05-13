import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculasService } from './services/peliculas.service';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    PagesModule,
     
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
