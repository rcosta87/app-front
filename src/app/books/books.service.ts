import { Categoria } from './../categorias/categoria/categoria.model';
import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import {Livro} from "./book/book.model"

import {BOOK_API} from '../app.api'
import {ErrorHandler} from '../app.error-handler'

@Injectable()
export class BooksService {

    constructor(private http: Http){}

    books(search?: string): Observable<Livro[]> {
      return this.http.get(`${BOOK_API}/livros`, {params: {q: search}})
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    bookById(id: string): Observable<Livro>{
      return this.http.get(`${BOOK_API}/livros/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    reviewsOfBook(id: string): Observable<any>{
      return this.http.get(`${BOOK_API}/livros/${id}/reviews`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    categoriesOfBook(id: string): Observable<Categoria>{
      return this.http.get(`${BOOK_API}/categorias/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }


}
