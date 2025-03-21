import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BandComponent } from './pages/band/band.component';
import { MusicComponent } from './pages/music/music.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "band/:id",
    component: BandComponent
  },
  {
    path: "music/:id",
    component: MusicComponent
  }
];
