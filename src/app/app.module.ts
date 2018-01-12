import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AllPokemonComponent } from './components/all-pokemon/all-pokemon.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

import { ServicesService } from './services.service';

@NgModule({
  declarations: [
    AppComponent,
    AllPokemonComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
