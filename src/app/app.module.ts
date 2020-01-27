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
import { MatCheckboxModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { SchieberZComponent } from './schieber/schieber-z/schieber-z.component';
import { DialogEndRoundComponent } from './dialog-endround/dialog-endround.component';
import { DialogWeisenComponent } from './dialog-weisen/dialog-weisen.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DialogStartSchieberComponent } from './dialog-start-schieber/dialog-start-schieber.component';

@NgModule({
  declarations: [
    AppComponent,
    SchieberComponent,
    CoiffeurComponent,
    SchieberZComponent,
    DialogEndRoundComponent,
    DialogWeisenComponent,
    HomepageComponent,
    DialogStartSchieberComponent
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
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogEndRoundComponent, DialogWeisenComponent, DialogStartSchieberComponent]
})
export class AppModule { }
