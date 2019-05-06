import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book/book.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { ReviewsBookComponent } from './books/book-detail/reviews-book/reviews-book.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './categories/category/category.component'
import { CategoryDetailComponent } from './categories/category-detail/category-detail.component';
import { CarrouselComponent } from './carrousel/carrousel.component';

import { SlideComponent } from './carrousel/slide/slide.component';
import { BestSellersComponent  } from './best-sellers/best-sellers.component';
import { TitleSectionComponent } from './title-section/title-section.component';
import { ShoppingCartIconComponent }  from './shopping-cart/shopping-cart-icon/shopping-cart-icon.component';


import { BookInfoComponent } from './books/book-detail/book-info/book-info.component';
import { PanelComponent } from './books/book-detail/panel/panel.component';
import { LoginComponent } from './auth/login/login.component';
import { UserDetailComponent } from './auth/user-detail/user-detail.component';
import { AplicationErrorHandler } from './app.error-handler';
import { HeaderWaveComponent } from './header/header-wave/header-wave.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    BooksComponent,
    BookComponent,
    BookDetailComponent,
    ReviewsBookComponent,
    ShoppingCartComponent,
    CategoriesComponent,
    CategoryComponent,
    CategoryDetailComponent,
    CarrouselComponent,
    SlideComponent,
    BestSellersComponent,
    TitleSectionComponent,
    ShoppingCartIconComponent,
    BookInfoComponent,
    PanelComponent,
    LoginComponent,
    UserDetailComponent,
    HeaderWaveComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule.forRoot(),
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'},
             {provide: ErrorHandler, useClass: AplicationErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
