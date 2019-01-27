import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { Categoria } from './categoria/categoria.model';

import {BOOK_API} from '../app.api'
import {ErrorHandler} from '../app.error-handler'

@Injectable()
export class CategoriasService {

    constructor(private http: Http){}

    consumeCategorias(search?: string): Observable<Categoria[]> {
      return this.http.get(`${BOOK_API}/categorias`, {params: {q: search}})
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    categoriaByID(id: string): Observable<Categoria>{
      return this.http.get(`${BOOK_API}/categorias/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    booksOfCategory(id: string): Observable<any>{
      return this.http.get(`${BOOK_API}/categorias/${id}/livros`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

}
