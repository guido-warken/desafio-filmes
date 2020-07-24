import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FilmsModule } from './films/films.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FilmsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
