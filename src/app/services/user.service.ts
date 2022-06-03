import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://gsb-solutions.herokuapp.com';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get(`${baseUrl}/users`);
  }
  create(user:any): Observable<any> {
    return this.http.post(`${baseUrl}/users`, user);
  }
}