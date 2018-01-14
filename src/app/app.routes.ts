import { RouterModule, Routes} from '@angular/router';
import { AllPokemonComponent } from './components/all-pokemon/all-pokemon.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

const APP_ROUTES: Routes = [
  { path: 'allPokemon', component: AllPokemonComponent},
  { path: 'pokemon/:idx', component: PokemonComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'allPokemon' }
];

export  const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
