import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-posts-list-item',
  templateUrl: './posts-list-item.component.html',
  styleUrls: ['./posts-list-item.component.scss']
})
export class PostsListItemComponent implements OnInit {

  @Input()
  post: Post;

  constructor() { }

  ngOnInit() {
  }

  getAuthorLink() {
    return `/author/${this.post.author.id}`;
  }

  getPostLink() {
    return `/posts/${this.post.id}`;
  }
}
