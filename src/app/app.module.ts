import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchieberComponent } from './schieber/schieber.component';
import { CoiffeurComponent } from './coiffeur/coiffeur.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material';

import { SchieberZComponent } from './schieber/schieber-z/schieber-z.component';
import { DialogEndRoundComponent } from './schieber/dialog-endround/dialog-endround.component';
import { DialogWeisenComponent } from './schieber/dialog-weisen/dialog-weisen.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DialogStartSchieberComponent } from './dialog-start-schieber/dialog-start-schieber.component';
import { OverviewGamesComponent } from './overview-games/overview-games.component';

@NgModule({
  declarations: [
    AppComponent,
    SchieberComponent,
    CoiffeurComponent,
    SchieberZComponent,
    DialogEndRoundComponent,
    DialogWeisenComponent,
    HomepageComponent,
    DialogStartSchieberComponent,
    OverviewGamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    DragDropModule,
    MatAutocompleteModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogEndRoundComponent, DialogWeisenComponent, DialogStartSchieberComponent]
})
export class AppModule { }
