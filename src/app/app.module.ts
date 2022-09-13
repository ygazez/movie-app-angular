import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavoritesComponent } from './favorites/favorites.component';
import { ContentLoaderModule } from '@ngneat/content-loader';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './services/login.guard';
import { AuthService } from './services/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    FavoritesComponent,
    LoginComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ContentLoaderModule,
  ],
  providers: [AuthService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }


