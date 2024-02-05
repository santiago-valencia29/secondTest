import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Book, mockBook } from '../models/book.model'

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = mockBook

  getTopBooks(count: number): Observable<Book[]> {
    // Ordena los libros por la cuenta de ventas en orden descendente
    const sortedBooks = this.books.sort((a, b) => b.salesCount - a.salesCount)

    // Toma los primeros 'count' libros
    const topBooks = sortedBooks.slice(0, count)

    return of(topBooks)
  }

  getAllBooks(): Observable<Book[]> {
    // Simula la obtención de todos los libros
    return of(this.books)
  }
}
