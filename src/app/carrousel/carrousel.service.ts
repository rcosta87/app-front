import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

import {Observable} from 'rxjs'

import { SlideCarrousel } from './carrousel.model';

import {BOOK_API} from '../app.api'


@Injectable()
export class CarrouselService {

    constructor(private http: HttpClient){}

    getSlides(): Observable<SlideCarrousel[]> {
      return this.http.get<SlideCarrousel[]>(`${BOOK_API}/slides`)
    }

}
