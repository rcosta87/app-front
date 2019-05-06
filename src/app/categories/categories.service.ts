import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

import {Observable} from 'rxjs'

import { Category } from './category/category.model';

import {BOOK_API} from '../app.api'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  category: Category

    constructor(private http: HttpClient){}

    consumeCategories(): Observable<Category[]> {
      return this.http.get<Category[]>(`${BOOK_API}/categorias`)
    }

    booksOfCategory(id: string): Observable<any>{
      return this.http.get(`${BOOK_API}/categorias/${id}/livros`)
    }

    categoryDetail(id:string): Observable<Category>{
      return this.http.get<Category>(`${BOOK_API}/categorias/${id}`)
    }
}
