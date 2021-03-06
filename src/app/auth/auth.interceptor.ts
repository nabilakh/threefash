import {Injectable}  from '@angular/core'
import {HttpInterceptor,HttpRequest, HttpHandler } from '@angular/common/http'
import {AuthServiceService} from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor
 {
  constructor(private authService:AuthServiceService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler){
      const token = this.authService.getToken()
      req = req.clone({
          setHeaders:{
              Authorization: "Bearer " + token
          }
      });
    return next.handle(req)
  }
}
