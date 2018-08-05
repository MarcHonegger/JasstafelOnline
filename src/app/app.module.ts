import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchieberComponent } from './schieber/schieber.component';
import { CoiffeurComponent } from './coiffeur/coiffeur.component';

@NgModule({
  declarations: [
    AppComponent,
    SchieberComponent,
    CoiffeurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
