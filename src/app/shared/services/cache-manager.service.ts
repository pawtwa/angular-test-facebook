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
    return has;
  }

  remove() {

  }
}
