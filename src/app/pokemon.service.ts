import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';

@Injectable()
export class PokemonService {

  private urlPokemon: string = 'https://cors.now.sh/https://pokeapi.co/api/v2';
  private pokemons:any=[];
  private pokemonMostrar:any=[];
  private promises = [];
  constructor(public http: Http) {

  }
  // OBTENEMOS LOS POKEMONS DE TIPO NATIONAL
  obtenerPokemonsNtional(){
    let url=`${this.urlPokemon}/pokedex/1/`;

    let headers = new Headers({
      'User-Agent': 'cheese'
    });
   return this.http.get(url)
      .map(res => {
        return res.json();
      });
  }

  // AHORA OBTENEMOS TODOS LOS POKEMONS CON EL FIN DE USAR LA PAGINACION
  obtenerpokemons(){

    let url=`${this.urlPokemon}/pokemon`;
    return this.http.get(url)
      .map(res => {
        return res.json();
      });

  }

  // FUNCION Q PERMITE OBTENER MAS POKEMONES EN LA SIGUIENTE PAGINA
  obtenerMadpokemons(url){
    return this.http.get(url)
      .map(res => {
        return res.json();
      });

  }

  // FUNCION QUE PERMITE COMPARAR ENTRE EL ARRAY POKEMONNATIONAL Y LOS POKEMONES CON EL FIN DE OBTENER SOLO LOS NATIONAL Y SUS CARACTERISTICAS
  obtenerarrayMostrar(currentPokemons, currentNationalPokemons){
    let globalScope=this;
    let promise= new Promise(function (resolve, reject) {

      for (let u of currentPokemons.pokemons){
        let posicion = currentNationalPokemons.indexOf(u.name);

        if (posicion >= 0){
          globalScope.http.get(u.url)
            .map(res => {
              return res.json();

            }).subscribe(resp => {
              globalScope.pokemonMostrar.push(resp);
            });
        }

      }
        resolve(globalScope.pokemonMostrar);
    });

    return promise;
  }

  // DEVOLVEMOS UN SOLO POKEMON SEGUN EL IDX
  getPoke( idx: string ){
    return this.pokemonMostrar[idx];
  }

  // OBTENEMOS LA SPECIE DEL POKEMON
  species( url ){
   return this.http.get(url)
      .map(res =>
      {
        return res.json();
      });
  }
}
