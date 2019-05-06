import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { InputComponent } from './input/input.component'
import { RadioComponent } from './radio/radio.component'
import { RatingComponent } from './rating/rating.component'
import { OrderService } from '../order/order.service'
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service'
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationService } from './messages/notification.service'
import { BooksService } from './../books/books.service';
import { CarrouselService } from '../carrousel/carrousel.service';
import { PageIntroComponent } from '../shared/page-intro/page-intro.component';
import { CategoriesService } from '../categories/categories.service'
import { LoggedinService } from '../auth/loggedin.service';
import { LoginService } from '../auth/login.service';

import { LeaveOrderGuardService } from '../order/leave-order-guard.service';

import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthInterceptorService } from '../auth/auth.interceptor.service'


@NgModule({
  declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent, PageIntroComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ],
  exports: [InputComponent, RadioComponent,SnackbarComponent,
            RatingComponent, CommonModule,
            FormsModule, ReactiveFormsModule, PageIntroComponent ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers:[ShoppingCartService,
                CarrouselService,
                OrderService,
                NotificationService,
                BooksService,
                CategoriesService,
                LoggedinService,
                LoginService,
                LeaveOrderGuardService,
                {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}]
    }
  }
}
