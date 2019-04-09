import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from './../../../environments/environment';
import { PostsResponse } from '../interfaces/responses/posts-response.interface';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class PostsService {

  constructor(private http: HttpClient) {}

  getPosts(): Observable<PostsResponse> {
    return this.http.get<PostsResponse>(environment.posts_url);
  }
}
