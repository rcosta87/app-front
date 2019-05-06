import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { CategoryComponent } from './categories/category/category.component';
import { CategoryDetailComponent } from './categories/category-detail/category-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoggedinService } from './auth/loggedin.service'


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login/:to', component: LoginComponent },
  {path: 'livros', component: BooksComponent},
  {path: 'livros/:id', component: BookDetailComponent},
  {path: 'categorias', component: CategoryComponent},
  {path: 'detalhe-categoria/:id', component: CategoryDetailComponent},
  {path: 'order', loadChildren: './order/order.module#OrderModule', canLoad: [LoggedinService], canActivate: [LoggedinService]},
  {path: 'order-summary/:id', loadChildren: './order-summary/order-summary.module#OrderSummaryModule',canLoad: [LoggedinService], canActivate: [LoggedinService]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules,scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
