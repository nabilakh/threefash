import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IUser} from '../interfaces/user';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {map} from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient, private router:Router) { }

  signup(user:IUser){
    return this.http.post<any>(environment.apiURL + 'user' + 'signup', user).subscribe(res => {
      Swal.fire('Directing','to signin page','success')
      this.router.navigate(['signin'])
    })
  }

  getUser(){
    return this.http.get<any>(environment.apiURL + 'user').pipe(map(res => {
      console.log(res)
      return res.data
    }))
  }

  singin(user:IUser){
    return this.http.post<any>(environment.apiURL + 'user' + 'signin',user).subscribe(res => {
      localStorage.setItem('access_token', res.access_token);
      Swal.fire('Welcome','to ThreeFash','success')
      this.router.navigate(['']);
    })
  }

  logout() {
    let clearToken = localStorage.removeItem('access_token');
    if (clearToken == null){
      this.router.navigate(['']);
    }
  }

  getToken() {
    return localStorage.getItem('access_token');
  }
  get isLogin() {
    let token = localStorage.getItem('access_token');
    if(token != null) {
      return true
    }
    else return false
  }

}
