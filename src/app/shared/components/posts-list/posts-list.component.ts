import { Component, OnInit, OnDestroy } from '@angular/core';
import { Posts } from 'src/app/shared/interfaces/posts.interface';
import { PostsService } from 'src/app/shared/services/posts.service';
import { PostsResponse } from 'src/app/shared/interfaces/responses/posts-response.interface';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit, OnDestroy {
  posts: Posts = [];

  destroy$ = new Subject();

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.setupPosts();
  }

  ngOnDestroy() {
    this.destroy$.next(null);
  }

  trackPost(index: number) {
    return index;
  }

  private setupPosts() {
    this.postsService.getPosts()
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe({
      next: (data: PostsResponse) => {
        console.warn('PostsListComponent posts', data.posts);
        this.posts = data.posts;
      },
      error: (error) => {
        console.error('error', error);
      },
      complete: () => { }
    })
  }
}
