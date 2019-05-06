import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { OrderComponent } from './order.component';

@Injectable({
  providedIn: 'root'
})
export class LeaveOrderGuardService implements CanDeactivate<OrderComponent>{

  canDeactivate(orderComponent: OrderComponent,
                activatedRoute: ActivatedRouteSnapshot,
                routerState: RouterStateSnapshot): boolean {
      if(!orderComponent.isOrderCompleted()){
          return window.confirm('Deseja desistir da compra ?')
      } else{
        return true
      }
  }
}
