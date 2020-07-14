import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class HttpService {
  private BASE_URL = isDevMode()
    ? '//localhost:3030/api/'
    : '/api/';

  constructor(private http: HttpClient) { }

  public get(endpoint: string, data = null) {
    return this.http.get(`${this.BASE_URL}${endpoint}`, data);
  }

  public post(endpoint: string, data: any) {
    return this.http.post(`${this.BASE_URL}${endpoint}`, data);
  }

  public put(endpoint: string, data: any) {
    return this.http.put(`${this.BASE_URL}${endpoint}`, data);
  }

  public delete(endpoint: string, data: any) {
    return this.http.delete(`${this.BASE_URL}${endpoint}`, data);
  }
}
