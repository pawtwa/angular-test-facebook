import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { PostsResponse } from '../interfaces/responses/posts-response.interface';
import { Post } from '../interfaces/post.interface';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class PostsService {

  constructor(private http: HttpClient) {}

  getPosts(): Observable<PostsResponse> {
    return this.http.get<PostsResponse>(environment.posts_url, {
      reportProgress: false
    });
  }

  getPostById(id: string): Observable<Post> {
    return this.getPosts().pipe(
      map((response: PostsResponse) => {
        return response.posts.find((post: Post) => {
          return post.id === id;
        });
      })
    );
  }
}
