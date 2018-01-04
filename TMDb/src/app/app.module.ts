import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TmdbServiceService } from './services/tmdb-service.service';
import { StarComponent } from './shared/star/star.component';
import { SearchFilterPipe } from './components/navbar/search-filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StarComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [TmdbServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
