import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { User } from './user.model'
import { NotificationService } from 'app/shared/messages/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  navigateTo: string

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private notificationService: NotificationService,
              private activeRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required])
    })
    this.navigateTo = this.activeRoute.snapshot.params['to'] || btoa('/')

  }

  login(){
    this.loginService.login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(
        user => this.notificationService.notify(`Bem vindo, ${user.name}`),
        response => this.notificationService.notify(response.error.message),
        () => this.router.navigate([atob(this.navigateTo)])
      )
  }

}
