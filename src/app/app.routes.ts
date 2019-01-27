import { CategoriaDetailComponent } from './categorias/categoria-detail/categoria-detail.component';
import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {OrderSummaryComponent} from './order-summary/order-summary.component'
import {NotFoundComponent} from './not-found/not-found.component'
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BooksComponent } from './books/books.component';
import { ReviewsBookComponent } from './books/book-detail/reviews-book/reviews-book.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaComponent } from './categorias/categoria/categoria.component';


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'livros', component: BooksComponent},
  {path: 'livros/:id', component: BookDetailComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'categorias/:id', component: CategoriaDetailComponent},
  {path: 'order', loadChildren: './order/order.module#OrderModule'},
  {path: 'order-summary', component: OrderSummaryComponent},
  {path: 'about', loadChildren: './about/about.module#AboutModule'},
  {path: '**', component: NotFoundComponent}
]
