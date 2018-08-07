import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchieberComponent } from './schieber/schieber.component';
import { CoiffeurComponent } from './coiffeur/coiffeur.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatButtonToggleModule, MatDialogModule, MatInputModule } from '@angular/material';
import { SchieberZComponent } from './schieber/schieber-z/schieber-z.component';
import { DialogPunkteComponent } from './dialog-punkte/dialog-punkte.component';
import { DialogWeisenComponent } from './dialog-weisen/dialog-weisen.component';

@NgModule({
  declarations: [
    AppComponent,
    SchieberComponent,
    CoiffeurComponent,
    SchieberZComponent,
    DialogPunkteComponent,
    DialogWeisenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogPunkteComponent, DialogWeisenComponent]
})
export class AppModule { }
