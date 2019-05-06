import { Injectable } from '@angular/core';
import {EventEmitter} from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  notifier = new EventEmitter<string>()

  notify(message: string){
    this.notifier.emit(message)
  }

}
