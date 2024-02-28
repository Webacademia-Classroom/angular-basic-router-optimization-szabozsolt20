import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { MusicianComponent } from './page/musician/musician.component';
import { InstrumentComponent } from './page/instrument/instrument.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { MusicianEditComponent } from './page/musician-edit/musician-edit.component';

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
    component: MusicianComponent,
  },
  {
    path: "musicians/edit/:id",
    component: MusicianEditComponent,
  },
  {
    path: "instruments",
    component: InstrumentComponent,
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];
