import { Injectable, EventEmitter } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable, Subject } from 'rxjs'
import { Book } from "./book/book.model"
import { BOOK_API } from '../app.api'

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private book = new Subject<Book>()

    constructor(private http: HttpClient){}

    books(search?: string): Observable<Book[]> {
      let params: HttpParams = undefined
      if(search){
        params = new HttpParams().set('q', search)
      }
      return this.http.get<Book[]>(`${BOOK_API}/livros`, {params: params})
    }

    bookById(id: string): Observable<Book>{
      return this.http.get<Book>(`${BOOK_API}/livros/${id}`)
    }

    reviewsOfBook(id: string): Observable<any>{
      return this.http.get(`${BOOK_API}/livros/${id}/reviews`)
    }

    authorOfBook(id:string): Observable<any>{
      return this.http.get(`${BOOK_API}/autors/${id}`)
    }
}
