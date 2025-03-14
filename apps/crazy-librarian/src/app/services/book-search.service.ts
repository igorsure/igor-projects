import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SearchResult } from '../interfaces/book interface';

@Injectable({
  providedIn: 'root',
})
export class BookSearchService {
  constructor(private http: HttpClient) {}

  searchBook(search: string = '', page = 1): Observable<SearchResult | any> {
    if (search === '') return of(null);
    const url = `https://gutendex.com/books?search=${search}`;
    return this.http.get(url);
    //return of({books:{1:{title:'tom and Jerry'}}});
  }
  getBookMetadata(bookID: number) {}
  getBookText(bookID: number): Observable<Object> {
    const url = `https://gutendex.com/books/${bookID}`;
    //const url= `https://www.gutenberg.org/ebooks/${bookID}.html.images`
    return this.http.get(url);
  }
  getBookPageCount(bookID: number) {}
  getBookPage(bookID: number, page = 1) {}
}
