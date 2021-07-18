import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { UserServiceService } from '../services/user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  getToken() {
    throw new Error('Method not implemented.');
  }

  constructor(private userService: UserServiceService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.userService.getToken();
    const authreq = token
      ? req.clone({ headers: req.headers.set('access_token', token) })
      : req;
    return next.handle(authreq);
  }
}
