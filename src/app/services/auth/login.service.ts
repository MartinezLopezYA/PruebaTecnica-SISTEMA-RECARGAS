import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://137.184.230.141:5000/token_json';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.url, { username, password })
    .pipe(
      tap(response => {
        sessionStorage.setItem('access_token', response.access_token);
      })
    );
  }
}