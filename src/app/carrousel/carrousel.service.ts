import { Categoria } from './../categorias/categoria/categoria.model';
import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { SlideCarrousel } from './carrousel.model';

import {BOOK_API} from '../app.api'
import {ErrorHandler} from '../app.error-handler'

@Injectable()
export class CarrouselService {

    constructor(private http: Http){}

    getSlides(): Observable<SlideCarrousel[]> {
      return this.http.get(`${BOOK_API}/slides`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

}
