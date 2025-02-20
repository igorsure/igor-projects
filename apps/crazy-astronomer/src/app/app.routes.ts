import { Routes } from '@angular/router';
import { ConstellationListComponent } from './components/constellation-list/constellation-list.component';
import { ConstellationComponent } from './components/constellation/constellation.component';
import { StarComponent } from './components/star/star.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home',pathMatch:"full" },
    { path: 'constellations', component: ConstellationListComponent }, 
    { path: 'constellations/:id', component: ConstellationComponent },
    { path: 'star/:id',component:StarComponent}, 
    { path: 'home', component: HomeComponent },
 ];
