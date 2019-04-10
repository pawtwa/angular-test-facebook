import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/interfaces/post.interface';
import { ActivatedRoute, Params } from '@angular/router';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  post: Post = null;

  constructor(
    private activateRoute: ActivatedRoute,
    private postService: PostsService
  ) { }

  ngOnInit() {
    this.setupPost(this.activateRoute.snapshot.params.id);
    // this.activateRoute.snapshot.params.subscribe((params: Params) => {
    //   this.setupPost(params.id);
    // });
  }

  private setupPost(id: string) {
    this.postService.getPostById(id).subscribe({
      next: (post: Post) => {
        this.post = post;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
