import { Injectable } from '@angular/core';
import { HttpEvent, HttpRequest } from '@angular/common/http';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class CacheManagerService {
  private cache: Map<string, {event: HttpEvent<any>, date: Date}> = new Map();

  constructor() { }

  save(req: HttpRequest<any>, res: HttpEvent<any>) {
    console.log('req', req);
    console.log('res', res);
    this.cache.set(req.url, {event: res, date: new Date()});
  }

  get(req: HttpRequest<any>): HttpEvent<any> {
    return this.cache.get(req.url).event;
  }

  has(req: HttpRequest<any>) {
    const has = this.cache.has(req.url);
    if (has) {
      const cacheTimestamp = this.cache.get(req.url).date.getTime();
      const timeDiff = Math.round(Math.abs((new Date()).getTime() - cacheTimestamp) / 1000);
      console.log('timeDiff', timeDiff);
      if (timeDiff > 15) {
        this.remove(req);
        return false;
      }
    }
    return has;
  }

  private remove(req: HttpRequest<any>): boolean {
    return this.cache.delete(req.url);
  }
}
