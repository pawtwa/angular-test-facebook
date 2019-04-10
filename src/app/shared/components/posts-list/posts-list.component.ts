import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/shared/interfaces/posts.interface';
import { PostsService } from 'src/app/shared/services/posts.service';
import { PostsResponse } from 'src/app/shared/interfaces/responses/posts-response.interface';

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
