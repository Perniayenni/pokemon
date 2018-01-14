import { RouterModule, Routes} from '@angular/router';
import { AllPokemonComponent } from './components/all-pokemon/all-pokemon.component';

const APP_ROUTES: Routes = [
  { path: 'allPokemon', component: AllPokemonComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'allPokemon' }
];

export  const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
