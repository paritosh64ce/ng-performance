import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, Observable, of } from 'rxjs';
import { CachingService } from './caching.service';

@Injectable({
  providedIn: 'root'
})
export class HttpWrapperService {

  constructor(private httpService: HttpClient, private cachingService: CachingService) { }

  get(url: string, headers: any = undefined, useCaching: boolean = false): Observable<any> {
    if (useCaching === true) {
      const key = this.cachingService.generateCachingHashKey(url, null, headers);
      const cachedData = this.cachingService.getDataFromCache(key);
      if (cachedData != null) {
        return of(cachedData);
      } else {
        let resultSubject = new AsyncSubject<any>();
        this.sendGetRequest(url, headers).subscribe((result) => {
          this.storeResponseInCacheAndProcess(url, headers, result, resultSubject);
        });
        return resultSubject;
      }
    } else {
      return this.httpService.get(url);
    }
  }

  post(url: string, body: any, headers: any = undefined, useCaching: boolean = false): Observable<any> {
    if (useCaching === true) {
      const key = this.cachingService.generateCachingHashKey(url, body, headers);
      const cachedData = this.cachingService.getDataFromCache(key);
      if (cachedData != null) {
        return of(cachedData);
      } else {
        let resultSubject = new AsyncSubject<any>();
        this.sendPostRequest(url, body, headers).subscribe((result) => {
          this.storeResponseInCacheAndProcess(url, headers, result, resultSubject);
        });
        return resultSubject;
      }
    } else {
      return this.httpService.post(url, body, { headers: headers });
    }
  }

  private sendPostRequest(url: string, body: any, headers: any): Observable<any> {
    return this.httpService.post(url, body, { headers: headers });
  }

  private sendGetRequest(url: string, headers: any): Observable<any> {
    return this.httpService.get(url, { headers: headers });
  }

  private storeResponseInCacheAndProcess(url: string, headers: any, response: any, resultSubject: AsyncSubject<any>): void {
    const key = this.cachingService.generateCachingHashKey(url, headers, response);
    this.cachingService.storeDataInCache(key, response);
    resultSubject.next(response);
    resultSubject.complete();
  }
}