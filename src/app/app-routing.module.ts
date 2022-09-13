import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { LoginGuard } from './services/login.guard';

const routes: Routes = [
  { path: 'movie', component: MovieComponent },
  { path: 'favorites', component: FavoritesComponent, canActivate: [LoginGuard]} ,
  {path:'login',component:LoginComponent},
  { path: '', redirectTo: '/movie', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule],
})
export class AppRoutingModule {}
