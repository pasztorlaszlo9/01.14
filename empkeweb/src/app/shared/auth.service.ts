import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  host = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  login(user: any) {
    const url = this.host + 'login'
    return this.http.post(url, user)
  }
}
