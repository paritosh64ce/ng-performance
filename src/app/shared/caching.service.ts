import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CachingService {

  constructor() { }

  generateCachingHashKey(url: string, data: any, headers: any): string {
    // use ts-md5 library to generate hash key
    return url;
  }

  getDataFromCache(key: string): any {
    // use ng2-cache package to get data from cache
    return localStorage.getItem(key);
  }

  storeDataInCache(key: string, value: any): void {
    // use ng2-cache to set data in cache
    localStorage.setItem(key, value);
  }
}