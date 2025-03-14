import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookSearchService } from '../../services/book-search.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
     HttpClientModule 
  ],
  providers:[BookSearchService],

})
export class BookSearchModule { }
