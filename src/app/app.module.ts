import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {LocationStrategy, HashLocationStrategy} from '@angular/common'

import {ROUTES} from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { OrderSummaryComponent } from './order-summary/order-summary.component';

import {SharedModule} from './shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book/book.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BooksService } from './books/books.service';
import { ReviewsBookComponent } from './books/book-detail/reviews-book/reviews-book.component';
import { ShoppingCartComponent } from './books/book-detail/shopping-cart/shopping-cart.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaComponent } from './categorias/categoria/categoria.component';
import { CategoriaDetailComponent } from './categorias/categoria-detail/categoria-detail.component';
import { CarrouselComponent } from './carrousel/carrousel.component';

import { SlideComponent } from './carrousel/slide/slide.component';
import { MaisVendidosComponent } from './mais-vendidos/mais-vendidos.component';
import { TitleSectionComponent } from './title-section/title-section.component';
import { ShoppingIconComponent } from './header/shopping-icon/shopping-icon.component';
import { PageIntroComponent } from './page-intro/page-intro.component';


import { SlickModule } from 'ngx-slick';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    OrderSummaryComponent,
    NotFoundComponent,
    BooksComponent,
    BookComponent,
    BookDetailComponent,
    ReviewsBookComponent,
    ShoppingCartComponent,
    CategoriasComponent,
    CategoriaComponent,
    CategoriaDetailComponent,
    CarrouselComponent,
    SlideComponent,
    MaisVendidosComponent,
    TitleSectionComponent,
    ShoppingIconComponent,
    PageIntroComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}),
    SlickModule.forRoot()
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
