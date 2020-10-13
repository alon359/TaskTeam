import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';



@Injectable({ providedIn: 'root' })
export class HttpService {
  private BASE_URL = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public get(endpoint: string) {
    return this.http.get(`${this.BASE_URL}${endpoint}`);
  }

  public post(endpoint: string, data = {}) {
    return this.http.post(`${this.BASE_URL}${endpoint}`, data);
  }

  public put(endpoint: string, data = {}) {
    return this.http.put(`${this.BASE_URL}${endpoint}`, data);
  }

  public delete(endpoint: string, data = {}) {
    return this.http.delete(`${this.BASE_URL}${endpoint}`, data);
  }
}
