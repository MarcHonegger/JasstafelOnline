import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchieberComponent } from './schieber/schieber.component';
import { CoiffeurComponent } from './coiffeur/coiffeur.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatButtonToggleModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SchieberComponent,
    CoiffeurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
