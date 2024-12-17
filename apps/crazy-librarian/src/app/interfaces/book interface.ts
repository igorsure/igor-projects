export interface Author {
  name: string;
  birth_year: number;
  death_year: number;
}
export interface Book {
  id: number;
  title: string;
  authors: Author[];
  translators: [];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean;
  media_type: string;
  formats: {
    'text/html': 'https://www.gutenberg.org/ebooks/84.html.images';
    'application/epub+zip': 'https://www.gutenberg.org/ebooks/84.epub3.images';
    'application/x-mobipocket-ebook': 'https://www.gutenberg.org/ebooks/84.kf8.images';
    'application/rdf+xml': 'https://www.gutenberg.org/ebooks/84.rdf';
    'image/jpeg': 'https://www.gutenberg.org/cache/epub/84/pg84.cover.medium.jpg';
    'text/plain; charset=us-ascii': 'https://www.gutenberg.org/ebooks/84.txt.utf-8';
    'application/octet-stream': 'https://www.gutenberg.org/cache/epub/84/pg84-h.zip';
  };
  download_count: number;
}
export interface SearchResult {
    "count": number,
    "next": string,
    "previous": string,
    results: Book[]
}
// "formats": {
//     "text/html": "https://www.gutenberg.org/ebooks/84.html.images",
//     "application/epub+zip": "https://www.gutenberg.org/ebooks/84.epub3.images",
//     "application/x-mobipocket-ebook": "https://www.gutenberg.org/ebooks/84.kf8.images",
//     "application/rdf+xml": "https://www.gutenberg.org/ebooks/84.rdf",
//     "image/jpeg": "https://www.gutenberg.org/cache/epub/84/pg84.cover.medium.jpg",
//     "text/plain; charset=us-ascii": "https://www.gutenberg.org/ebooks/84.txt.utf-8",
//     "application/octet-stream": "https://www.gutenberg.org/cache/epub/84/pg84-h.zip"
//   };
