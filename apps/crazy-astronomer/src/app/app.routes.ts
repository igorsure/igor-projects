import { Routes } from '@angular/router';
import { ConstelationListComponent } from './components/constelation-list/constelation-list.component';
import { ConstelationComponent } from './components/constelation/constelation.component';
import { StarComponent } from './components/star/star.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', component: HomeComponent },
    { path: 'constelations', component: ConstelationListComponent }, 
    { path: 'constelations/:id', component: ConstelationComponent },
    { path: 'star/:id',component:StarComponent} 
 ];
