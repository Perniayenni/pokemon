import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../../pokemon.service';

@Component({
  selector: 'app-all-pokemon',
  templateUrl: './all-pokemon.component.html',
  styleUrls: ['./all-pokemon.component.css']
})
export class AllPokemonComponent {

  public poemonMostrar:any=[];
  public nexpage:string;
  public pokemonsNational:any= [];

  constructor(private pokeServ: PokemonService) {
    console.log('1');
    this.pokeServ.obtenerPokemonsNtional()
      .subscribe(dat => {
      //let pokemonsNational = [];
      for (let a of dat.pokemon_entries) {
        this.pokemonsNational.push(a.pokemon_species.name);
      }
      this.pokeServ.obtenerpokemons().subscribe(dat => {
        let datos = {
          'next': dat.next,
          'pokemons': dat.results
        }
        this.nexpage=dat.next;
        let pokemons = datos;
        let scopess=this;
        this.pokeServ.obtenerarrayMostrar(pokemons, this.pokemonsNational).then(function (resp) {
          //console.log(resp);
          scopess.poemonMostrar = resp;

        });
      });
    });
  }
    /*this.pokeServ.obtenerarrayMostrar()
      .then(function () {
        console.log(this.pokeServ.pokemonMostrar);
      }); */

  obtenermaspokemnon(){
      console.log(this.nexpage);
      this.pokeServ.obtenerMadpokemons(this.nexpage)
        .subscribe(dat=>{
          let datos = {
            'next': dat.next,
            'pokemons': dat.results
          }
          this.nexpage=dat.next;
          let pokemons = datos;
          let scopess=this;
          this.pokeServ.obtenerarrayMostrar(pokemons, this.pokemonsNational).then(function (resp) {
            //console.log(resp);
            scopess.poemonMostrar = resp;
        });
    });

  }
}
