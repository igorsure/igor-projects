import { CommonModule } from '@angular/common';
import { Component, computed, signal, Signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BookSearchService } from '../../services/book-search.service';
import { map, Observable, Subject } from 'rxjs';
import { BookSearchModule } from '../../modules/book-search/book-search.module';
import { Author, Book, SearchResult } from '../../interfaces/book interface';

@Component({
  selector: 'app-search',
  imports: [CommonModule, FormsModule, BookSearchModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {

  searchForm: FormGroup;
  searchResult$ = new Observable<SearchResult | undefined>();
  resultCount$=new Observable<number>;
  resultList$ =new Observable<Book[]>;
  bookText$= new Observable<Object>;
  searchValue= signal('');

  searchBooks() {
  }
  constructor(private fb: FormBuilder, private bookSearch:BookSearchService) {
    this.searchForm = this.fb.group({
      value: ['', Validators.required],
    });

  }

  onSubmit(form: any) {
    console.log('Form Submitted!', form.form.value.searchValue);
    this.searchValue.set(form.form.value.searchValue)
    this.searchResult$ =this.bookSearch.searchBook(this.searchValue());
    this.resultCount$=this.searchResult$.pipe(map(result=> result? result.count: 0))
    this.resultList$=this.searchResult$.pipe(map(result=> result? result.results: []))

  }
  getAuthors(authors:Author[]){
    return authors.map(author=>author.name).join(' ');

  }

  getText(bookID: number, formats: any): void {
     //this.bookText$=this.bookSearch.getBookText(formats['text/html']);
     this.bookText$=this.bookSearch.getBookText(bookID);
    }
}
