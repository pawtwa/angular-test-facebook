import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsResponse } from '../interfaces/responses/posts-response.interface';
import { Observable } from 'rxjs';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class PostsService {

  constructor(private http: HttpClient) {}

  getPosts(): Observable<PostsResponse> {
    return this.http.get<PostsResponse>('/assets/posts.json');
  }
}
