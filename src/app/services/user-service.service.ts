import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { LoginModel } from '../models/login..model';
import { jwtDecode } from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);
  constructor() { }

  register(formData: UserModel) {
    return this.http.post("http://localhost:3000/auth/register", {
      email: formData.email,
      password: formData.password,
      nickname: formData.nickname
    })
  }

  login(formData: LoginModel) {
    return this.http.post("http://localhost:3000/auth/login", {
      email: formData.email,
      password: formData.password
    })
  }

  getDecodedUser() {
    const token = localStorage.getItem('user_token');
    if(token){
      const decodedToken = jwtDecode(token);
      return decodedToken.sub;
    }
    return null;
  }

  isLogged() {
    if (localStorage.getItem('user_token')) {
      return true;
    } else {
      return false;
    }
  }

  getUser() {
    return this.http.get("http://localhost:3000/customers" + this.getDecodedUser()
    );
  }

  updateUser(formData: UserModel) {
    return this.http.put("http://localhost:3000/customers" + this.getDecodedUser(), {
    email: formData.email,
    password: formData.password,
    nickname: formData.nickname
  })
  }

}
