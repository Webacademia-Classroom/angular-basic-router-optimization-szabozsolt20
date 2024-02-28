import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { NotFoundComponent } from './page/not-found/not-found.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "musicians",
    loadComponent: () => import('./page/musician/musician.component').then(m => m.MusicianComponent),
  },
  {
    path: "musicians/edit/:id",
    loadComponent: () => import('./page/musician-edit/musician-edit.component').then(m => m.MusicianEditComponent),
  },
  {
    path: "instruments",
    loadComponent: () => import('./page/instrument/instrument.component').then(m => m.InstrumentComponent),
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];
