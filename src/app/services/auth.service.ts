import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import API from './index';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<{ token: string }>(API.AUTH.LOGIN, {
      username,
      password,
    });
  }

  setToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  logout() {
    sessionStorage.removeItem('token');
  }
}
