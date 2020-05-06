import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './public/master-page/navbar/navbar.component';
import { HeroComponent } from './public/master-page/hero/hero.component';
import { HomeComponent } from './public/home/home.component';
import { FooterComponent } from './public/master-page/footer/footer.component';
import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';
import { MiViComponent } from './public/QuienesSomos/mi-vi/mi-vi.component';
import  { HttpClientModule } from '@angular/common/http';
//import { PruebaComponent } from './modules/prueba/prueba.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    HomeComponent,
    FooterComponent,
    PageNotFoundComponent,
    MiViComponent,
    
    //PruebaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
