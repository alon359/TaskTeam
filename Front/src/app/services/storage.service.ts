import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  store(key: string, value) {
    localStorage.setItem(key, JSON.stringify(value) || null);
  }

  load(key: string) {
    const data = localStorage.getItem(key);
    return (data) ? JSON.parse(data) : undefined;
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }
}
