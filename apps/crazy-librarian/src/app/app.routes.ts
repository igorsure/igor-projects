import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShowBookFulltextComponent } from './components/show-book-fulltext/show-book-fulltext.component';
import { SearchComponent } from './components/search/search.component';
import { ShowBookPageComponent } from './components/show-book-page/show-book-page.component';
import { HttpClientModule } from '@angular/common/http';
export const routes: Routes = [
     { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent }, 
      { path: 'search', component: SearchComponent }, 
      { path: 'bookPage', component: ShowBookPageComponent }, 
      { path: 'bookFullText', component: ShowBookFulltextComponent}]