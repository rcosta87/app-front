import { CategoryDetailComponent } from './categories/category-detail/category-detail.component';
import {Routes} from '@angular/router'

import { HomeComponent } from './home/home.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BooksComponent } from './books/books.component';
import { CategoriesComponent } from './categories/categories.component';
import { LoggedInGuard } from './auth/loggedin.guard';
import { LoginComponent } from './auth/login/login.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login/:to', component: LoginComponent },
  {path: 'livros', component: BooksComponent},
  {path: 'livros/:id', component: BookDetailComponent},
  {path: 'categorias', component: CategoriesComponent},
  {path: 'detalhe-categoria/:id', component: CategoryDetailComponent},
  {path: 'order', loadChildren: './order/order.module#OrderModule', canLoad: [LoggedInGuard], canActivate: [LoggedInGuard]},
  {path: 'order-summary/:id', loadChildren: './order-summary/order-summary.module#OrderSummaryModule', canLoad: [LoggedInGuard], canActivate: [LoggedInGuard]},
  {path: 'about', loadChildren: './about/about.module#AboutModule'},
  {path: '**', component: NotFoundComponent}
]
