import { Component, OnInit } from '@angular/core';

import { PostsService } from '../../services/posts.service';
import { PostsResponse } from '../../interfaces/responses/posts-response.interface';
import { Posts } from '../../interfaces/posts.interface';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts: Posts = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.setupPosts();
  }

  trackPost(index: number) {
    return index;
  }

  private setupPosts() {
    this.postsService.getPosts().subscribe({
      next: (data: PostsResponse) => {
        this.posts = data.posts;
      },
      error: (error) => {
        console.error('error', error);
      },
      complete: () => { }
    })
  }
}
