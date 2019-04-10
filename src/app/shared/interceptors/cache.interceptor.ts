import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CacheManagerService } from '../services/cache-manager.service';
import { tap, filter } from 'rxjs/operators';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class CacheInterceptor implements HttpInterceptor {

  constructor(
    private cacheManagerService: CacheManagerService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.cacheManagerService.has(req)) {
      console.log('from cache');
      return of(this.cacheManagerService.get(req));
    }
    return next.handle(req).pipe(
      filter(evt => evt instanceof HttpResponse),
      tap((res: HttpEvent<any>) => {
        console.log('from request');
        this.cacheManagerService.save(req, res);
      })
    );
  }
}
