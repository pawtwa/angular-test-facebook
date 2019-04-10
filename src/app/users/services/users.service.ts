import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { Observable, throwError } from 'rxjs';
import { map, switchMap, catchError, delay } from 'rxjs/operators';
import { PostsResponse } from 'src/app/shared/interfaces/responses/posts-response.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Post } from 'src/app/shared/interfaces/post.interface';
import { UsersResponse } from '../interfaces/responces/users-response.interface';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class UsersService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UsersResponse> {
    return this.http.get<PostsResponse>(environment.posts_url, {
      reportProgress: false
    }).pipe(
      delay(3000),
      map((response) => {
        const users: { [s: string]: User } = { };
        response.posts.forEach((value: Post, index: number, array: Post[]) => {
          if (typeof users[value.author.id] === 'undefined') {
            users[value.author.id] = value.author;
          }
        });
        return { users: Object.values(users)};
      })
    );
  }

  getUserById(id: string): Observable<User | never> {
    return this.getUsers().pipe(
      map((response: UsersResponse) => {
        return response.users.find((user: User) => {
          return user.id === id;
        });
      }),
      switchMap(() => {
        return throwError('User loading error!');
      })
    );
  }
}
