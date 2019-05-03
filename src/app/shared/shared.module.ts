import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { InputComponent } from './input/input.component'
import { RadioComponent } from './radio/radio.component'
import { RatingComponent } from './rating/rating.component'
import { OrderService } from '../order/order.service'
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationService } from './messages/notification.service'
import { BooksService } from './../books/books.service';
import { CarrouselService } from './../carrousel/carrousel.service';
import { PageIntroComponent } from '../shared/page-intro/page-intro.component';
import { CategoriesService } from '../categories/categories.service'
import { LoggedInGuard } from 'app/auth/loggedin.guard';
import { LoginService } from 'app/auth/login.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../auth/auth.interceptor'
import { LeaveOrderGuard } from 'app/order/leave-order.guard';


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
                LoggedInGuard,
                LoginService,
                LeaveOrderGuard,
                {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}]
    }
  }
}
