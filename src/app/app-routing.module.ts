import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchieberComponent } from './schieber/schieber.component';
import { CoiffeurComponent } from './coiffeur/coiffeur.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageComponent
  },
  {
    path: 'Schieber',
    component: SchieberComponent
  },
  {
    path: 'Coiffeur',
    component: CoiffeurComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
